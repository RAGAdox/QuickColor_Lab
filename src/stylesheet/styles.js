import { StyleSheet, StatusBar } from "react-native";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7D744",
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
    //height: 40 + "%",
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
    marginTop: StatusBar.currentHeight + 20,
    marginBottom: 1 + "%",
    width: 95 + "%",
    backgroundColor: "#E5E2D6",
    alignItems: "center"
  },
  blockContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    //backgroundColor: "#00ff00",
    width: 100 + "%"
  },
  optionContainer: {
    flexDirection: "row",
    height: 15 + "%",
    width: 95 + "%"
  },
  homeContainer: {
    flexDirection: "row",
    height: 20 + "%",
    width: 95 + "%"
  },
  infoBar: {
    alignItems: "center",
    backgroundColor: "#00ffff",
    paddingLeft: 5 + "%",
    paddingRight: 5 + "%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 0.6,
    borderColor: "#00cccc",
    borderTopWidth: 0
  },
  infoText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default styles;
