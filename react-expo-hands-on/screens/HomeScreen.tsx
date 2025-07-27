import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      <View style={{ height: 10 }} />
      <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
      <View style={{ height: 10 }} />
      <Button title="Go to Registration" onPress={() => navigation.navigate('Register')} />
      <View style={{ height: 10 }} />
      <Button title="Check Weather" onPress={() => navigation.navigate('Weather')} />
      <View style={{ height: 10 }} />
      <Button title="View Daily News" onPress={() => navigation.navigate('News')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
