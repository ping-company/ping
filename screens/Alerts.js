import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const alertIcon = ({tintColor}) => (<Icon name="bell" size={24} color={tintColor} />)

type Props = {};
export default class Alerts extends Component<Props> {
  static navigationOptions = {
    tabBarIcon: alertIcon,
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
