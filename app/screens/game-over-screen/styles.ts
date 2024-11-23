import COLORS from "@/app/constants/colors";
import { StyleSheet, Dimensions } from "react-native";

const mobileWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  GameOverContainer: {},
  gameOverTextWrapper: {
    marginTop: deviceHeight < 450 ? 30 : 70,
    marginHorizontal: 60,

    padding: 10,

    borderWidth: 2,
    borderColor: "white",

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
  },
  gameOverText: {
    color: "white",

    fontSize: 20,
    fontWeight: "900",

    textAlign: "center",
  },
  imageBackgroundWrapper: {
    width: mobileWidth || deviceHeight < 450 ? 200 : 300,
    height: mobileWidth || deviceHeight < 450 ? 200 : 300,

    alignSelf: "center",

    overflow: "hidden",

    borderRadius: "50%",
    borderWidth: 3,
    borderColor: "black",

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 7,

    marginTop: 30,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  textsWrapper: {
    marginTop: 30,
    marginHorizontal: 30,

    alignItems: "center",
    gap: 5,
  },
  texts: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
  },
  coloredText: {
    color: COLORS.primaryYellow,
    fontSize: 24,
    fontWeight: "900",
  },
  restartBtn: {
    marginTop: 30,
    marginBottom: 30,
    width: 200,
    padding: 10,

    backgroundColor: COLORS.primaryBackground,
    borderRadius: 20,

    alignSelf: "center",

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
  },
  restartText: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
});

export default styles;
