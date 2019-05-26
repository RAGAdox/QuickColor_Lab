import { StyleSheet, StatusBar } from "react-native";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D2691E",
    flex: 1,
    width: 100 + "%",
    height: 100 + "%"
  },
  block: {
    height: 20 + "%",
    width: 95 + "%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "auto",
    //backgroundColor: "#00ffff",
    margin: 5,
    borderRadius: 10
  },
  option: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ffff",
    margin: 5,
    borderRadius: 10
  },
  blockText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  gameScreen: {
    borderRadius: 10,
    flex: 1,
    marginTop: StatusBar.currentHeight + 10,
    marginBottom: 1 + "%",
    width: 95 + "%",
    backgroundColor: "#ffffff",
    alignItems: "center"
  },
  optionContainer: {
    flexDirection: "row",
    height: 20 + "%",
    width: 95 + "%"
  },
  infoBar: {
    alignItems: "center"
  },
  infoText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default styles;
