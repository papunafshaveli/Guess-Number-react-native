import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  defaultButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
  },
  defaultButton: {
    backgroundColor: "#B03052",
    padding: 5,
    borderRadius: 20,
    flex: 1,
  },
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
