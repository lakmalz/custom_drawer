import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet, View, Image, Modal } from "react-native";

export default class Loader extends Component {
  render() {
    const { animationType, modalVisible } = this.props;
    return (
      <Modal
        visible={modalVisible}
        animationType={animationType}
        transparent={true}
      >
        <View style={styles.wrapper}>
          <View>
            <Image
              style={styles.loaderImage}
              source={require("../assets/loader.gif")}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

Loader.propTypes = {
  animationType: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9,
    backgroundColor: "rgba(0,0,0,0.6)",
    position: "absolute",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  },
  loaderImage: {
    alignSelf: "center",
    width: 120,
    height: 120
  }
});
