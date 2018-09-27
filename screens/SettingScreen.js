import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, Image, View } from "react-native";

import { Header, Left, Right, Icon } from "native-base";
export default class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <TouchableOpacity
              style={{ width: 34, height: 34 }}
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Image
                source={require("../assets/ic_menu.png")}
                style={{ width: 34, height: 34 }}
              />
            </TouchableOpacity>
          </Left>
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
