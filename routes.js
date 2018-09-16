import React from "react";
import { View } from "react-native";
import Home from "./screens/Home";
import Explore from "./screens/Explore";
import Alerts from "./screens/Alerts";
import Profile from "./screens/Profile";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation';

import { BottomNavigation, Text, Appbar } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
const homeIcon = ({tintColor}) => (<Icon name="home" size={24} color={tintColor} />)

export const Routes = createMaterialBottomTabNavigator(
  {
    Home: { 
      screen: Home,
      navigationOptions: {
        tabBarIcon: homeIcon,
      },
    },
    Explore: { 
      screen: Explore
    },
    Alerts: { 
      screen: Alerts
    },
    Profile: { 
      screen: Profile
    },
  },
  {
    initialRouteName: 'Home',
    activeTintColor: '#f0edf6',
    inactiveTintColor: '#3e2465',
    barStyle: { backgroundColor: '#FF9800' },
    shifting: false,
  }
);
export default Routes;

//export default class MyComponent extends React.Component {
  //state = {
    //index: 0,
    //routes: [
      //{ key: 'home', title: 'Home', icon: 'home' },
      //{ key: 'explore', title: 'Explore', icon: 'search' },
      //{ key: 'alerts', title: 'Alerts', icon: 'favorite' },
      //{ key: 'profile', title: 'Profile', icon: 'person-outline' },
    //],
  //};

  //_handleIndexChange = index => this.setState({ index });

  //_renderScene = BottomNavigation.SceneMap({
    //home: Home,
    //explore: Explore,
    //alerts: Alerts,
    //profile: Profile,
  //});

  //render() {
    //return (
      //<BottomNavigation
        //navigationState={this.state}
        //onIndexChange={this._handleIndexChange}
        //renderScene={this._renderScene}
      ///>
    //);
  //}
//}


//const Routes = createStackNavigator(
  //{
    //Home: {
      //screen: Home
    //},
    //Channels: {
      //screen: Channels
    //}
  //},
  //{
    //initialRouteName: "Home",
    //navigationOptions: {
      //headerStyle: {
        //backgroundColor: 'black', 
        //borderWidth: 1, 
        //borderBottomColor: 'white' 
      //},
      //headerTitleStyle: {
        //fontWeight: "bold",
        //color: "#fff",
        //zIndex: 1,
        //fontSize: 18,
      //},
      //headerTintColor: "#fff",
      //animationEnabled: true
    //}
  //}
//);

