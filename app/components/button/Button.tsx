import { Pressable, Text } from "react-native";

import styles from "./styles";

type ButtonProps = {
  onBtnPress: () => void;
  text: string;
  isConfirmedBtn?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onBtnPress,
  text,
  isConfirmedBtn,
}) => {
  return (
    <Pressable
      onPress={onBtnPress}
      style={({ pressed }) => [
        isConfirmedBtn ? styles.confirmButton : styles.resetButton,
        pressed && styles.pressedItem,
      ]}
      android_ripple={{ color: "#72063c" }}
    >
      <Text
        style={
          isConfirmedBtn ? styles.confirmButtonText : styles.resetButtonText
        }
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
