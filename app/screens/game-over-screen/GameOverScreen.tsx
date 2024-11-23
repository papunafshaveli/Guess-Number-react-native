import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Vibration,
  ScrollView,
} from "react-native";
import { useEffect } from "react";
import styles from "./styles";

type GameOverScreenProps = {
  onRestart: () => void;
  countRounds: string[];
  myNumber?: number;
};

const GameOverScreen: React.FC<GameOverScreenProps> = ({
  onRestart,
  countRounds,
  myNumber,
}) => {
  useEffect(() => {
    Vibration.vibrate(800);
  });

  return (
    <ScrollView style={styles.GameOverContainer}>
      <View style={styles.gameOverTextWrapper}>
        <Text style={styles.gameOverText}>Game Over!</Text>
      </View>

      <ImageBackground
        style={styles.imageBackgroundWrapper}
        source={require("../../../assets/images/goalBackground.png")}
        resizeMode="contain"
        imageStyle={styles.imageBackground}
      />
      <View style={styles.textsWrapper}>
        <Text style={styles.texts}>
          Your Phone Needed{" "}
          <Text style={styles.coloredText}>{countRounds.length}</Text> Rounds
        </Text>
        <Text style={styles.texts}>
          to guess the number <Text style={styles.coloredText}>{myNumber}</Text>{" "}
        </Text>
      </View>
      <Pressable style={styles.restartBtn} onPress={onRestart}>
        <Text style={styles.restartText}>Start New game</Text>
      </Pressable>
    </ScrollView>
  );
};

export default GameOverScreen;
