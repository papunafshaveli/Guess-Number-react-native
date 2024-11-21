import { Alert, Text, View } from "react-native";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/app/components";
import MIN_MAX_NUMBERS from "@/app/constants/minMaxNumbers";
import generateRandomNumber from "@/app/helpers/generateRandomNumber";

import styles from "./styles";

type GameScreenProps = {
  myNumber: number;
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setCountRound: React.Dispatch<React.SetStateAction<number>>;
};

const GameScreen: React.FC<GameScreenProps> = ({
  myNumber,
  isGameOver,
  setIsGameOver,
  setCountRound,
}) => {
  const tempMinNumber = useRef(MIN_MAX_NUMBERS.min);
  const tempMaxNumber = useRef(MIN_MAX_NUMBERS.max);

  let opponentInitialNumber = generateRandomNumber(
    tempMinNumber.current,
    tempMaxNumber.current,
    myNumber
  );
  const [opponentNumber, setOpponentNumber] = useState(opponentInitialNumber);

  useEffect(() => {
    if (opponentNumber === myNumber && !isGameOver) {
      setIsGameOver(true);
    }
  }, [opponentNumber, myNumber, isGameOver]);

  const nextGuessHandler = (direction: "lower" | "higher") => {
    if (isGameOver) return;
    setCountRound((prevCountRound) => prevCountRound + 1);

    if (
      (direction === "lower" && opponentNumber < myNumber) ||
      (direction === "higher" && opponentNumber > myNumber)
    ) {
      Alert.alert("Do not lie", "Please Give The Right hint!", [
        { text: "Okay", style: "destructive" },
      ]);
      return;
    }

    if (direction === "lower") {
      tempMaxNumber.current = opponentNumber;
    } else {
      tempMinNumber.current = opponentNumber + 1;
    }

    if (tempMinNumber.current >= tempMaxNumber.current) {
      setOpponentNumber(tempMinNumber.current);
      setIsGameOver(true);
      return;
    }

    const nextOpponentNumber = generateRandomNumber(
      tempMinNumber.current,
      tempMaxNumber.current,
      opponentNumber
    );

    setOpponentNumber(nextOpponentNumber);
  };

  return (
    <View style={styles.GameScreenContainer}>
      <View style={styles.opponentsGuessTextWrapper}>
        <Text style={styles.opponentsGuessText}>Opponent's Guess</Text>
      </View>

      <View style={styles.opponentsGuessNumWrapper}>
        <Text style={styles.opponentsGuessNum}>{opponentNumber}</Text>
      </View>

      <View style={styles.higherLowerWrapper}>
        <Text style={styles.higherLowerText}>Higher or Lower?</Text>

        <View style={styles.buttonsWrapper}>
          <Button onBtnPress={() => nextGuessHandler("lower")} text={"-"} />
          <Button onBtnPress={() => nextGuessHandler("higher")} text={"+"} />
        </View>
      </View>
    </View>
  );
};

export default GameScreen;
