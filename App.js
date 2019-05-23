import React from "react";
import { StyleSheet, Text, View } from "react-native";
import QuickColor from "./src/quickColor";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <QuickColor />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ff00",
    justifyContent: "center"
  }
});
