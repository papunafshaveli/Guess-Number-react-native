import { Pressable, Text } from "react-native";

import styles from "./styles";
import COLORS from "@/app/constants/colors";

type ButtonProps = {
  onBtnPress: () => void;
  text: string;
  isConfirmedBtn?: boolean;
  isResetBtn?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onBtnPress,
  text,
  isConfirmedBtn,
  isResetBtn,
}) => {
  const btnTextStyles = isConfirmedBtn
    ? styles.confirmButtonText
    : isResetBtn
    ? styles.resetButtonText
    : styles.defaultButtonText;

  const buttonStyles = ({ pressed }: { pressed: boolean }) => [
    isConfirmedBtn
      ? styles.confirmButton
      : isResetBtn
      ? styles.resetButton
      : styles.defaultButton,
    pressed && styles.pressedItem,
  ];
  return (
    <Pressable
      onPress={onBtnPress}
      style={buttonStyles}
      android_ripple={{ color: COLORS.primaryBackground }}
    >
      <Text style={btnTextStyles}>{text}</Text>
    </Pressable>
  );
};

export default Button;
