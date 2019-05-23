import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import TimerMixin from "react-timer-mixin";

import color from "./Services/colors";
/*var Component = createReactClass({
  mixins: [TimerMixin],
  componentDidMount: function() {
    this.setTimeout(() => {
      console.warn("I do not leak!");
    }, 500);
  }
});*/
let max = color.length,
  min = 0;
function genRandom() {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}
export default class QuickColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      block1Background: null,
      block1Text: null,
      correctIndex: null,
      ready: false,
      timeElasped: 30,
      enabled: true
    };
    //this.generateNewColourState();
  }
  /*incrementer = setInterval(() => {
    console.warn(1);
    //this.setState({ timeElasped: this.state.timeElasped + 1 });
  }, 1000);*/
  timer = setInterval(() => {
    //console.warn("I do not leak!");
    this.setState({ timeElasped: this.state.timeElasped - 1 });
    if (this.state.timeElasped == 0) {
      clearInterval(this.timer);
      Alert.alert(
        "Time Up",
        "NO Time is left",
        [
          {
            text: "OK",
            onPress: () => {
              console.warn("reset");
              this.setState({ enabled: false });
            }
          }
        ],
        { cancelable: false }
      );
    }
  }, 1000);
  componentWillMount() {
    this.timer;
    this.generateNewColourState();
    //this.setInterval(console.warn("one second"), 1000);
  }
  generateNewColourState() {
    let b1bg = genRandom(),
      b1tx = genRandom(),
      b2bg = genRandom(),
      b2tx = genRandom(),
      b2text = genRandom();
    if (b1bg == b1tx || b2bg == b2tx) this.generateNewColourState();
    else {
      this.setState({
        block1Background: b1bg,
        block1Text: b1tx,
        block2Background: b2bg,
        block2Text: b2tx,
        block2TextDisplay: b2text,
        correctIndex: genRandom(),
        ready: true
      });
    }
  }
  render() {
    //console.warn(Math.floor(Math.random() * (+max - +min)) + +min);
    if (this.state.ready == true)
      return (
        <View style={{ backgroundColor: "#ffffff", alignItems: "center" }}>
          <Text>Points : {this.state.points}</Text>
          <Text>Time Elasped : {this.state.timeElasped}</Text>
          <View
            style={[
              { backgroundColor: color[this.state.block1Background].value },
              styles.block
            ]}
          >
            <Text
              style={[
                { color: color[this.state.block1Text].value },
                styles.blockText
              ]}
            >
              {color[this.state.correctIndex].name}
            </Text>
          </View>
          <View
            style={[
              { backgroundColor: color[this.state.block2Background].value },
              styles.block
            ]}
          >
            <Text
              style={[
                {
                  color: color[this.state.block2Text].value
                },
                styles.blockText
              ]}
            >
              {color[this.state.block2TextDisplay].name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 20 + "%",
              width: 70 + "%"
            }}
          >
            {this.state.enabled ? (
              <React.Fragment>
                <TouchableOpacity
                  style={styles.option}
                  disabled={!this.state.enabled}
                  onPress={() => {
                    if (
                      this.state.correctIndex == this.state.block2Background
                    ) {
                      console.warn("correct");
                      this.setState({
                        points: this.state.points + 100
                      });
                    } else {
                      this.setState({
                        points: this.state.points - 100
                      });
                    }
                    this.generateNewColourState();
                  }}
                >
                  <Text>YES</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.option}
                  disabled={!this.state.enabled}
                  onPress={() => {
                    if (
                      this.state.correctIndex != this.state.block2Background
                    ) {
                      console.warn("correct");
                      this.setState({
                        points: this.state.points + 100
                      });
                    } else {
                      this.setState({
                        points: this.state.points - 100
                      });
                      console.warn("wrong");
                    }
                    this.generateNewColourState();
                  }}
                >
                  <Text>NO</Text>
                </TouchableOpacity>
              </React.Fragment>
            ) : null}
            {!this.state.enabled ? (
              <TouchableOpacity
                style={[styles.option, { backgroundColor: "#00ffff" }]}
                onPress={() => {
                  this.setState({ timeElasped: 30, points: 0, enabled: true });
                  let timer = setInterval(() => {
                    //console.warn("I do not leak!");
                    this.setState({ timeElasped: this.state.timeElasped - 1 });
                    if (this.state.timeElasped == 0) {
                      clearInterval(timer);
                      Alert.alert(
                        "Time Up",
                        "NO Time is left",
                        [
                          {
                            text: "OK",
                            onPress: () => {
                              console.warn("reset");
                              this.setState({ enabled: false });
                            }
                          }
                        ],
                        { cancelable: false }
                      );
                    }
                  }, 1000);
                  this.generateNewColourState();
                }}
              >
                <Text>restart</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      );
    else
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#ffffff"
            //alignItems: "center",
            //alignContent: "center",
            //justifyContent: "center"
          }}
        >
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              generateNewColourState();
            }}
          >
            <Text>Ready</Text>
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
    //backgroundColor: "#00ffff",
    margin: 5
  },
  option: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ffff",
    margin: 5
  },
  blockText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
