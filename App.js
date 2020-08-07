import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import AppNavigation from './src/navigations/AppNavigation';
//style={styles.container}

export default function App() {
  return (
    <AppNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
