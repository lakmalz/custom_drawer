import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions
} from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import SettingScreen from "./screens/SettingScreen";
import HomeScreen from "./screens/HomeScreen";
const { width } = Dimensions.get("window");
export default class App extends React.Component {
  render() {
    return <AppDrawerNavigator />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: "#0984e3"
    }}
  >
    <View
      style={{
        alignSelf: "center",
        height: 150,
        backgroundColor: "#0984e3",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("./assets/ic_profile.png")}
        style={{ height: 120, width: 120 }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Settings: SettingScreen
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: width
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
