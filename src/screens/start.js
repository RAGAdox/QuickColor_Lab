import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
export default class Start extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("app")}>
          <Text>Start playing</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
