import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../stylesheet/styles";
export default class Start extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.homeContainer, { flexDirection: "column" }]}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => this.props.navigation.navigate("app")}
        >
          <Text style={styles.blockText}>Start Playing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log("press")}
        >
          <Text style={styles.blockText}>Highest Score</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
