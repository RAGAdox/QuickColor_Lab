import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import color from "./Services/colors";
let max = color.length,
  min = 0;
function genRandom() {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}
export default class QuickColor extends React.Component {
  render() {
    //console.warn(Math.floor(Math.random() * (+max - +min)) + +min);
    return (
      <View style={{ backgroundColor: "#ff0000", alignItems: "center" }}>
        <View style={styles.block}>
          <Text>{color[genRandom()].name}</Text>
        </View>
        <TouchableOpacity onPress={() => console.warn(genRandom())}>
          <Text>YES</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  block: {
    height: 20 + "%",
    width: 50 + "%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ffff"
  }
});
