import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { QuickColor, Start } from "./src/screens";

import styles from "./src/stylesheet/styles";
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
const Switch = createSwitchNavigator(
  {
    start: Start,
    app: QuickColor
  },
  {
    initialRouteName: "start"
  }
);
//const Application =
const AppContainer = createAppContainer(Switch);
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}
