import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView} from 'react-native';

import { Button, Card, Title, Paragraph } from 'react-native-paper';

type Props = {};
export default class Home extends Component<Props> {
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
