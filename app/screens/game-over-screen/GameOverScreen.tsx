import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./styles";

type GameOverScreenProps = {
  onRestart: () => void;
  countRound: number;
  myNumber?: number;
};

const GameOverScreen: React.FC<GameOverScreenProps> = ({
  onRestart,
  countRound,
  myNumber,
}) => {
  return (
    <View style={styles.GameOverContainer}>
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
          Your Phone Needed <Text style={styles.coloredText}>{countRound}</Text>{" "}
          Rounds
        </Text>
        <Text style={styles.texts}>
          to guess the number <Text style={styles.coloredText}>{myNumber}</Text>{" "}
        </Text>
      </View>
      <Pressable style={styles.restartBtn} onPress={onRestart}>
        <Text style={styles.restartText}>Start New game</Text>
      </Pressable>
    </View>
  );
};

export default GameOverScreen;
