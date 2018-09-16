import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView} from 'react-native';

import { Button, Card, Title, Paragraph } from 'react-native-paper';

import firebase from 'react-native-firebase';
import type { Notification, NotificationOpen } from 'react-native-firebase';

type Props = {};
export default class Home extends Component<Props> {


  componentWillMount() {

    var config = {
      apiKey: "AIzaSyC6InOy2cvJmhDBFE8fCJ6HJUn4nMZbCQM",
      authDomain: "ping-52c17.firebaseapp.com",
      databaseURL: "https://ping-52c17.firebaseio.com",
      storageBucket: "ping-52c17.appspot.com",
      appId:"1:1066232610739:android:6e1b08e5872806e6",
      projectId: "ping-52c17",
      messagingSenderId: "1066232610739"
    };

    firebase.initializeApp(config);
    firebase.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          // user has permissions
        } else {

          // User does not have permissions; Ask for permissions
          firebase.messaging().requestPermission()
            .then(() => {
              // User has authorised  
            })
            .catch(error => {
              // User has rejected permissions  
            });
        } 
      });

    }

  async componentDidMount() {
    
        const notificationOpen: NotificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            const action = notificationOpen.action;
            const notification: Notification = notificationOpen.notification;
            var seen = [];
            alert(JSON.stringify(notification.data, function(key, val) {
                if (val != null && typeof val == "object") {
                    if (seen.indexOf(val) >= 0) {
                        return;
                    }
                    seen.push(val);
                }
                return val;
            }));
        } 
        const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
                .setDescription('My apps test channel');

// Create the channel
        firebase.notifications().android.createChannel(channel);
        this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification: Notification) => {
            // Process your notification as required
            // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
        });
        this.notificationListener = firebase.notifications().onNotification((notification: Notification) => {
            // Process your notification as required
            notification
                .android.setChannelId('test-channel')
                .android.setSmallIcon('ic_launcher');
            firebase.notifications()
                .displayNotification(notification);
            
        });
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen: NotificationOpen) => {
            // Get the action triggered by the notification being opened
            const action = notificationOpen.action;
            // Get information about the notification that was opened
            const notification: Notification = notificationOpen.notification;
            var seen = [];
            alert(JSON.stringify(notification.data, function(key, val) {
                if (val != null && typeof val == "object") {
                    if (seen.indexOf(val) >= 0) {
                        return;
                    }
                    seen.push(val);
                }
                return val;
            }));
            firebase.notifications().removeDeliveredNotification(notification.notificationId);
            
        });
    }

    componentWillUnmount() {
        this.notificationDisplayedListener();
        this.notificationListener();
        this.notificationOpenedListener();
    }



  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
      <ScrollView
        horizontal
      >
        <Card style={styles.card}>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/100' }} />
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/150' }} />
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/250' }} />
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/250' }} />
        </Card>
      </ScrollView>

        <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://picsum.photos/200' }} />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://picsum.photos/400' }} />
            <Card.Content style={styles.content}>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://picsum.photos/600' }} />
            <Card.Content style={styles.content}>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    margin: 8,
    borderRadius: 8
  },
  content: {
    padding: 4,
  },

});
