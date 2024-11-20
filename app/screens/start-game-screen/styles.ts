import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  startGameContainer: {},
  guessMyNumWrapper: {},

  mainContent: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,

    backgroundColor: "#72063c",

    borderRadius: 8,

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    alignItems: "center",
    gap: 10,
  },

  input: {
    height: 60,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsWrapper: {
    flexDirection: "row",
    gap: 10,
  },
});

export default styles;
