import { ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GameOverScreen, GameScreen, StartGameScreen } from "./screens";

import indexStyles from "./indexStyles";
import { useState } from "react";

export default function Index() {
  const [myNumber, setMyNumber] = useState<number | undefined>();

  const [isGameOver, setIsGameOver] = useState(false);

  const [countRound, setCountRound] = useState(0);

  const resetGame = () => {
    setMyNumber(undefined);
    setIsGameOver(false);
  };

  let Screen = <StartGameScreen setMyNumber={setMyNumber} />;

  if (myNumber && !isGameOver) {
    Screen = (
      <GameScreen
        myNumber={myNumber}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
        setCountRound={setCountRound}
      />
    );
  } else if (isGameOver) {
    Screen = (
      <GameOverScreen
        onRestart={resetGame}
        countRound={countRound}
        myNumber={myNumber}
      />
    );
  }

  return (
    // Image background and  linear Gradient
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
      style={indexStyles.container}
    >
      <ImageBackground
        source={require("../assets/images/dices.jpg")}
        resizeMode="cover"
        style={indexStyles.container}
        imageStyle={indexStyles.backgroundImg}
      >
        <SafeAreaView style={indexStyles.container}>{Screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
