import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { StartGameScreen } from "./screens";

import indexStyles from "./indexStyles";

export default function Index() {
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
        imageStyle={{ opacity: 0.1 }}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}
