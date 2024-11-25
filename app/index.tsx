import { ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GameOverScreen, GameScreen, StartGameScreen } from "./screens";

import indexStyles from "./indexStyles";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const [myNumber, setMyNumber] = useState<number | undefined>();

  const [isGameOver, setIsGameOver] = useState(false);

  const [countRounds, setCountRounds] = useState<string[]>([]);

  const resetGame = () => {
    setMyNumber(undefined);
    setIsGameOver(false);
    setCountRounds([]);
  };

  let Screen = <StartGameScreen setMyNumber={setMyNumber} />;

  if (myNumber && !isGameOver) {
    Screen = (
      <GameScreen
        myNumber={myNumber}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
        setCountRounds={setCountRounds}
        countRounds={countRounds}
      />
    );
  } else if (isGameOver) {
    Screen = (
      <GameOverScreen
        onRestart={resetGame}
        countRounds={countRounds}
        myNumber={myNumber}
      />
    );
  }

  return (
    <>
      <StatusBar style="dark" />

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
    </>
  );
}
