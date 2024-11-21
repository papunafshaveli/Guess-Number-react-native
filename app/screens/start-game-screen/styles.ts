import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  startGameContainer: {},

  guessMyNumWrapper: {
    marginTop: 90,
    marginHorizontal: 55,

    padding: 20,

    borderWidth: 2,
    borderColor: "white",

    borderRadius: 2,

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 7,
  },
  guessMyNumText: {
    color: "white",

    fontSize: 20,
    fontWeight: "900",

    textAlign: "center",
  },

  enterNumText: {
    color: "#ddb52f",

    fontSize: 24,
    fontWeight: "bold",
  },

  mainContent: {
    marginTop: 35,
    marginHorizontal: 20,
    padding: 20,

    backgroundColor: "#740938",

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
    width: 50,

    fontSize: 32,

    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,

    color: "#ddb52f",

    marginVertical: 8,

    fontWeight: "bold",

    textAlign: "center",
  },
  buttonsWrapper: {
    flexDirection: "row",
    gap: 10,
  },
});

export default styles;
