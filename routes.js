import React from "react";
import { View } from "react-native";
import Home from "./screens/Home";
import Channels from "./screens/Channels";
import { createStackNavigator } from "react-navigation";

const Routes = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Channels: {
      screen: Channels
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'black', 
        borderWidth: 1, 
        borderBottomColor: 'white' 
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#fff",
        zIndex: 1,
        fontSize: 18,
      },
      headerTintColor: "#fff",
      animationEnabled: true
    }
  }
);

export default Routes;
