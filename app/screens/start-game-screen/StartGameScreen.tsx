import {
  TextInput,
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import { Button } from "@/app/components";

import styles from "./styles";
import { Dispatch, SetStateAction, useState } from "react";

type StartGameScreenProps = {
  setMyNumber: Dispatch<SetStateAction<number | undefined>>;
};

const StartGameScreen: React.FC<StartGameScreenProps> = ({ setMyNumber }) => {
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
      return;
    }
    setMyNumber(enteredNumber);
  };

  const handleResetBtnClick = () => {
    setInputNumber("");
  };

  return (
    <ScrollView style={styles.startGameContainer}>
      <KeyboardAvoidingView
        style={styles.startGameContainer}
        behavior="position"
      >
        <View style={styles.startGameContainer}>
          <View style={styles.guessMyNumWrapper}>
            <Text style={styles.guessMyNumText}>Guess My Number</Text>
          </View>

          <View style={styles.mainContent}>
            <Text style={styles.enterNumText}>Enter a Number</Text>
            <TextInput
              style={styles.input}
              maxLength={2}
              keyboardType="number-pad"
              value={inputNumber}
              onChangeText={handleInputNumberChange}
            />

            <View style={styles.buttonsWrapper}>
              <Button
                onBtnPress={handleConfirmBtnClick}
                text={"Confirm"}
                isConfirmedBtn
              />
              <Button
                onBtnPress={handleResetBtnClick}
                text={"Reset"}
                isResetBtn
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;
