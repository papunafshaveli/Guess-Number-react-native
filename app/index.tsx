import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GameScreen, StartGameScreen } from "./screens";

import indexStyles from "./indexStyles";
import { SetStateAction, useEffect, useState } from "react";

export default function Index() {
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>();

  let Screen = <StartGameScreen setSelectedNumber={setSelectedNumber} />;

  if (selectedNumber) {
    Screen = <GameScreen />;
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
        {Screen}
      </ImageBackground>
    </LinearGradient>
  );
}
