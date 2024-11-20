import { TextInput, View, Text, Alert } from "react-native";

import { Button } from "@/app/components";

import styles from "./styles";
import { useState } from "react";

const StartGameScreen = () => {
  const [inputNumber, setInputNumber] = useState("");

  const handleInputNumberChange = (text: string) => {
    setInputNumber(text);
  };

  const handleConfirmBtnClick = () => {
    const enteredNumber = parseInt(inputNumber);
    if (isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: handleResetBtnClick }]
      );
    }
  };

  const handleResetBtnClick = () => {
    setInputNumber("");
  };

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
          value={inputNumber}
          onChangeText={handleInputNumberChange}
        />

        <View style={styles.buttonsWrapper}>
          <Button onBtnPress={handleConfirmBtnClick} text={"Confirm"} />
          <Button
            onBtnPress={handleResetBtnClick}
            text={"Reset"}
            isConfirmedBtn
          />
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;
