import { TextInput, View, Text } from "react-native";

import { Button } from "@/app/components";

import styles from "./styles";

const StartGameScreen = () => {
  return (
    <View style={styles.startGameContainer}>
      <View style={styles.guessMyNumWrapper}>
        <Text>Guess My Number</Text>
      </View>
      <View style={styles.mainContent}>
        <Text>Enter a Number</Text>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
        />

        <View style={styles.buttonsWrapper}>
          <Button
            onBtnPress={() => console.log("Reset")}
            text={"Reset"}
            isConfirmedBtn
          />
          <Button onBtnPress={() => console.log("Confirm")} text={"Confirm"} />
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;
