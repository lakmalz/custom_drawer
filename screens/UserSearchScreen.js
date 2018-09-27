import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  TextInput,
  TouchableHighlight
} from "react-native";

import { getUserInfo } from "./FetchUser";
import DashboardComponent from "./DashboardComponent";

export default class UserSearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      username: e.nativeEvent.text,
      useravatar: ""
    });
  }

  handleSubmit() {
    getUserInfo(this.state.username).then(res => {
      if (res.message === "Not Found") {
        this.setState({
          error: "User not found"
        });
      } else {
        // this.props.navigator.push({
        //   title: res.name || "No Title",
        //   passProps: { userInfo: res },
        //   component: DashboardComponent
        // });
        this.setState({
          error: false,
          username: res.name,
          useravatar: res.avatar_url
        });
      }
    });
  }
  render() {
    let showErr = this.state.error ? <Text>{this.state.error}</Text> : <View />;
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Search For Github User</Text>
        <TextInput style={styles.searchInput} onChange={this.handleChange} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        <Text>{this.state.username}</Text>
        <Image source={{ uri: this.state.useravatar }} style={styles.image} />

        {showErr}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 230
  },
  main: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#2a8ab7"
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center"
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    color: "white"
  },
  buttonText: {
    fontSize: 18,
    color: "#111",
    alignSelf: "center"
  },
  button: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  }
});
