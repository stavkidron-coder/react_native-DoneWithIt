import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Button, Alert } from 'react-native';

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

      {/* Regular custom alert */}
      <Button
        title="Custom Alert"
        onPress={() => Alert.alert("My Title", "My Message", [
          {text: "Yes", onPress: () => console.log("Yes")},
          {text: "No", onPress: () => console.log("No")},
        ])}
        color="orange"/>
      
      {/* Prompt for text on alert */}
      <Button
        title="Click Me!"
        onPress={() => Alert.prompt("My Title", "My Message", (text) => console.log(text))}
        color="orange"/>

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
