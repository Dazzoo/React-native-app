import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground  } from 'react-native';
import Navbar from './src/Navbar'
import AddToDo from './src/AddToDo'

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  return (
          <View style={styles.container}>
              <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                  <Navbar/>
                  <AddToDo/>
              </ImageBackground>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
      height: '100%',
      backgroundColor: '#ffcccb'
  },
    image: {
        flex: 1,
        justifyContent: "flex-start"
    }
});
