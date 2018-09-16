import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView} from 'react-native';

import { Button, Card, Title, Paragraph, Appbar } from 'react-native-paper';

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


      <Appbar.Header style={styles.heading}>

        <Appbar.Content
          title="Welcome to Ping"
          color="white"

        />
      </Appbar.Header>


      <ScrollView
        horizontal
      >

        

        <Card style={styles.card}>
          <Card.Content>
            <Title >Sport</Title>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://images.sciencedaily.com/2017/02/170215131600_1_900x600.jpg' }} />
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title >Campus</Title>
          </Card.Content>
          <Card.Cover source={{ uri: 'http://static0.cloudapp.net/uconn/content/uploads/2014/10/living-on-campus.jpg' }} />
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title >Class</Title>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.whistleblowerattorneys-blog.com/files/2014/06/College-classroom.jpg' }} />
        </Card>
        
      </ScrollView>

        <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://image.freepik.com/free-icon/school_318-23393.jpg' }} />
            <Card.Content>
              <Title>Cours canceled</Title>
              <Paragraph>Physics 101 at 9AM today has been cancellled</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button color="#FFD42E" icon={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABGklEQVR4Ae3RAcZCQRiF4buDfwshBGi+2UQgcIGAVtpSIuS/KyilG+UTcbk6zIH3GQBm3mM6AAAAAAAAAACA+eqf/yZBXcV/2XeCVPYx1FXj/FjGUMd45AQp/1HHGGLZNL+e61jHnKDmv8652YT1IvPfE2LX/Sh27/ycsF60yT/lk58JYn6eU4MJccjnlAmZ/33i0OAH4jg9Qcw/5g9YJpS+m6n0xvzpCfVe+nn59S7kGyYo+YYJWz3fO+E2PaFs9XzPhMy/6fmWCXq+YUJs9HzrhLh+JsQmrnq+bYKeb52g53snXPR88wQ93z9Bz/dP0PP9E/R89wQ93zpBz7dO0POtE/R86wQ93zpBzzdP+MoHAAAAAAAAAADAExTnTW20AtjhAAAAAElFTkSuQmCC'}} mode="contained"/>
              <Button color="#FFD42E" icon={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABEElEQVR4Ae3PAQYCURSF4QtIIiIAAmDAvLu9MAUBAlpLEAgCIWg5UzyZeAKnedfwfws4/mMAAAAAAAAAAAD/lbrUTTrfe+9TN+l8/UJ4vn4hPF++EJ8vX4jPly/E54sX4vOFC/H5woX4fOFCfH46p7NwITz/spltZukiXIjOtzfhQmS+X3N+vuBX4UJMvs/ti8+FC7H5woX4/OLCrcIFOf9W5n80iwoX1PxmYSX5Qnx+/AUhv7xwH+2CkH//mV/w5VgXhHxf2tsELvhezB8uPMqldmfjS0c1P2tWxYWDZVUvPHK+fiEdrR4/ffKblQnyBTFfuDDkKxee3vvJ6mt3OV/VrtutAQAAAAAAAAAAYDJeeA5LziNlLMgAAAAASUVORK5CYII='}} mode="contained"/>
            </Card.Actions>
          </Card>
        <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://image.freepik.com/free-icon/whistle-with-white-detail_318-43764.png' }} />
            <Card.Content style={styles.content}>
              <Title>Game delayed due to weather</Title>
              <Paragraph>Today's game has been delayed, and may be cancelled due to bad weather</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button color="#FFD42E" icon={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABGklEQVR4Ae3RAcZCQRiF4buDfwshBGi+2UQgcIGAVtpSIuS/KyilG+UTcbk6zIH3GQBm3mM6AAAAAAAAAACA+eqf/yZBXcV/2XeCVPYx1FXj/FjGUMd45AQp/1HHGGLZNL+e61jHnKDmv8652YT1IvPfE2LX/Sh27/ycsF60yT/lk58JYn6eU4MJccjnlAmZ/33i0OAH4jg9Qcw/5g9YJpS+m6n0xvzpCfVe+nn59S7kGyYo+YYJWz3fO+E2PaFs9XzPhMy/6fmWCXq+YUJs9HzrhLh+JsQmrnq+bYKeb52g53snXPR88wQ93z9Bz/dP0PP9E/R89wQ93zpBz7dO0POtE/R86wQ93zpBzzdP+MoHAAAAAAAAAADAExTnTW20AtjhAAAAAElFTkSuQmCC'}} mode="contained"/>
              <Button color="#FFD42E" icon={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABEElEQVR4Ae3PAQYCURSF4QtIIiIAAmDAvLu9MAUBAlpLEAgCIWg5UzyZeAKnedfwfws4/mMAAAAAAAAAAAD/lbrUTTrfe+9TN+l8/UJ4vn4hPF++EJ8vX4jPly/E54sX4vOFC/H5woX4fOFCfH46p7NwITz/spltZukiXIjOtzfhQmS+X3N+vuBX4UJMvs/ti8+FC7H5woX4/OLCrcIFOf9W5n80iwoX1PxmYSX5Qnx+/AUhv7xwH+2CkH//mV/w5VgXhHxf2tsELvhezB8uPMqldmfjS0c1P2tWxYWDZVUvPHK+fiEdrR4/ffKblQnyBTFfuDDkKxee3vvJ6mt3OV/VrtutAQAAAAAAAAAAYDJeeA5LziNlLMgAAAAASUVORK5CYII='}} mode="contained"/>
            </Card.Actions>
          </Card>
        <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX9793694.jpg' }} />
            <Card.Content style={styles.content}>
              <Title>50% Reduction for campus students</Title>
              <Paragraph>The italian restaurant is making 50% derduction for students, the offer is only for 3 days</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button color="#FFD42E" icon={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABGklEQVR4Ae3RAcZCQRiF4buDfwshBGi+2UQgcIGAVtpSIuS/KyilG+UTcbk6zIH3GQBm3mM6AAAAAAAAAACA+eqf/yZBXcV/2XeCVPYx1FXj/FjGUMd45AQp/1HHGGLZNL+e61jHnKDmv8652YT1IvPfE2LX/Sh27/ycsF60yT/lk58JYn6eU4MJccjnlAmZ/33i0OAH4jg9Qcw/5g9YJpS+m6n0xvzpCfVe+nn59S7kGyYo+YYJWz3fO+E2PaFs9XzPhMy/6fmWCXq+YUJs9HzrhLh+JsQmrnq+bYKeb52g53snXPR88wQ93z9Bz/dP0PP9E/R89wQ93zpBz7dO0POtE/R86wQ93zpBzzdP+MoHAAAAAAAAAADAExTnTW20AtjhAAAAAElFTkSuQmCC'}} mode="contained"/>
              <Button color="#FFD42E" icon={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABEElEQVR4Ae3PAQYCURSF4QtIIiIAAmDAvLu9MAUBAlpLEAgCIWg5UzyZeAKnedfwfws4/mMAAAAAAAAAAAD/lbrUTTrfe+9TN+l8/UJ4vn4hPF++EJ8vX4jPly/E54sX4vOFC/H5woX4fOFCfH46p7NwITz/spltZukiXIjOtzfhQmS+X3N+vuBX4UJMvs/ti8+FC7H5woX4/OLCrcIFOf9W5n80iwoX1PxmYSX5Qnx+/AUhv7xwH+2CkH//mV/w5VgXhHxf2tsELvhezB8uPMqldmfjS0c1P2tWxYWDZVUvPHK+fiEdrR4/ffKblQnyBTFfuDDkKxee3vvJ6mt3OV/VrtutAQAAAAAAAAAAYDJeeA5LziNlLMgAAAAASUVORK5CYII='}} mode="contained"/>
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
    borderRadius: 8,
    position: 'relative',
    textAlign: 'center',
    color: 'white'
  },

  centred:{
    position: 'absolute',
    top: 50,
    left: 50
    //transform: translate(-50%, -50%)
  },

  content: {
    padding: 4,
  },

  heading: {
      height: 80, 
      width: 360, 
      //transform: rotate('180deg'),  
      backgroundColor: '#FFD42E'
      //textAlign:'center'
      //box-shadow: 0 0 '11px' '-3px' rgba(0,0,0,0.29)
  }

});
