import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

export default function App() {

  console.log('App executed');
  const handlePress = () => {console.log('Text Pressed')}
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello World! This is long text that should end at one line and then have three dots.</Text>
      <TouchableHighlight onPress={() => console.log('Image Tapped')}>
      <Image source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
      }}/>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
