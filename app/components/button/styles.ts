import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  resetButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 18,
    flex: 1,
  },
  resetButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  confirmButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 18,
    flex: 1,
  },
  confirmButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  pressedItem: {
    opacity: 0.6,
  },
});

export default styles;
