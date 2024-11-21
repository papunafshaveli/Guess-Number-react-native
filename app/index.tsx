import { ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GameOverScreen, GameScreen, StartGameScreen } from "./screens";

import indexStyles from "./indexStyles";
import { useState } from "react";

export default function Index() {
  const [myNumber, setMyNumber] = useState<number | undefined>();

  const [isGameOver, setIsGameOver] = useState(false);

  let Screen = <StartGameScreen setMyNumber={setMyNumber} />;

  if (myNumber) {
    Screen = (
      <GameScreen
        myNumber={myNumber}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
      />
    );
  }

  if (isGameOver) {
    Screen = <GameOverScreen />;
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
