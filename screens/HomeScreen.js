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
import {
  Header,
  Content,
  Title,
  Body,
  Button,
  Container,
  Left,
  Right,
  Icon
} from "native-base";

export default class HomeScreen extends Component {
  handleAPIRequest = () => {
    console.log("start");
  };

  componentWillMount() {
    if (Platform.OS === "android") {
      StatusBar.setTranslucent(true);
    }
  }
  render() {
    return (
      //   <View style={styles.container}>
      //     <Header>
      //       <Left>
      //         {/* <TouchableOpacity
      //           style={{ width: 34, height: 34 }}
      //           onPress={() => this.props.navigation.openDrawer()}
      //         >
      //           <Image
      //             source={require("../assets/ic_menu.png")}
      //             style={{ width: 34, height: 34 }}
      //           />
      //         </TouchableOpacity> */}
      //       </Left>
      //     </Header>
      //     <View
      //       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      //     >
      //       <Text>Home Screen</Text>
      //     </View>
      //   </View>

      <Container style={{ backgroundColor: "#87cefa" }}>
        {/* <StatusBar
          
          barStyle="light-content"
        /> */}
        <Header transparent androidStatusBarColor="rgba(0,0,0,0.0)">
          {/* <StatusBar translucent barStyle="light-content" /> */}
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Transparent</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Text>Header with transparent prop</Text>
          <TouchableOpacity
            style={{ width: 120, height: 45 }}
            onPress={() => this.handleAPIRequest()}
          >
            <Text>Click Me</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
