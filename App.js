// Basic React import
import React from 'react';
// Visual elements & warning ignore imports
import { StatusBar, YellowBox } from 'react-native';
// Routes importing
import Routes from './src/routes'

// Ignoring a certain warning message
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

// The actual app screen with statusbar on top & Routes (the map screen and so)
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
}

// Old mobile application's styling

// import { StyleSheet, Text, View } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#7159c1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   title: {
//     fontWeight: 'bold',
//     fontSize: 32,
//     color: '#fff'
//   }
// });
