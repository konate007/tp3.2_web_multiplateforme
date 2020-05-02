import React from 'react';
import { StyleSheet, Text, View, TextInput,ToolbarAndroid, TouchableOpacity,} from 'react-native';
import Search from './Components/Search';
import Navigation from './Navigation/Navigation'

export default function App() {
  return (
        <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff' 
  }
});
