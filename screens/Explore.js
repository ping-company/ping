import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const exploreIcon = ({tintColor}) => (<Icon name="search" size={24} color={tintColor} />)

type Props = {};
export default class Explore extends Component<Props> {
  static navigationOptions = {
    tabBarIcon: exploreIcon,
  }
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
