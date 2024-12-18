import COLORS from "@/app/constants/colors";
import { StyleSheet, Dimensions } from "react-native";

// media dimensions
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  GameScreenContainer: {
    flex: 1,
  },

  opponentsGuessTextWrapper: {
    marginTop: 20,
    marginHorizontal: 10,

    padding: 10,

    borderWidth: 2,
    borderColor: "white",

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
  },

  opponentsGuessText: {
    color: "white",

    fontSize: 20,
    fontWeight: "700",

    textAlign: "center",
  },

  opponentsGuessNumWrapper: {
    borderWidth: 3,
    borderColor: COLORS.primaryYellow,

    marginTop: deviceHeight < 450 ? 10 : 25,
    marginHorizontal: deviceWidth < 450 ? 15 : 20,
    padding: deviceWidth || deviceHeight < 450 ? 20 : 30,

    borderRadius: 8,

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 7,
  },
  opponentsGuessNum: {
    color: COLORS.primaryYellow,

    fontSize: deviceWidth < 450 ? 24 : 32,
    fontWeight: "bold",
    textAlign: "center",
  },

  higherLowerWrapper: {
    marginTop: deviceHeight < 450 ? 10 : 40,
    marginHorizontal: 20,
    padding: 25,

    backgroundColor: COLORS.primaryBackground,

    borderRadius: 8,

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    alignItems: "center",
    gap: 25,
  },

  higherLowerText: {
    color: COLORS.primaryYellow,

    fontSize: 24,
    fontWeight: "bold",
  },

  buttonsWrapper: {
    flexDirection: "row",
    gap: 10,
  },
  roundsWrapper: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  roundItem: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 10,

    marginHorizontal: 20,
    padding: 10,

    borderWidth: 2,
    borderColor: "black",

    borderRadius: 20,

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 7,
  },
  roundText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
