import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Loader from "./Loader";

const getMusicAlbums = () => {
  const URL = "https://rallycoding.herokuapp.com/api/music_albums";
  return fetch(URL).then(res => res.json());
};

export default class GetRequestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resValue: "Response values",
      loadingVisible: false,
      text: ""
    };
  }

  onClickMe = () => {
    console.log(this.state.text);
    alert(this.state.text);
  };

  componentDidMount() {
    this.setState({ loadingVisible: true });
    getMusicAlbums().then(res => {
      console.log(res);
      this.setState({
        resValue: "Result got succeeded",
        loadingVisible: false
      });
    });
  }

  render() {
    const { loadingVisible } = this.state;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#05c46b"
        }}
      >
        <Text> {this.state.resValue} </Text>
        <TextInput
          placeholder={"Enter text"}
          onChangeText={text => this.setState({ text })}
          style={{ width: 230, height: 45 }}
        />
        <TouchableOpacity onPress={() => this.onClickMe()}>
          <Text>Click</Text>
        </TouchableOpacity>
        <Loader animationType="fade" modalVisible={loadingVisible} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
