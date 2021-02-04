import React from 'react';
import { View } from 'react-native';

import Screen from './app/components/Screen';
import WelcomeScreen from './app/screens/WelcomeScreen.js';
import ViewImageScreen from './app/screens/ViewImageScreen.js'
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton.js';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen.js';
import MessagesScreen from './app/screens/MessagesScreen.js';
import Icon from './app/components/Icon';

export default function App() {
  
  return (
      <Screen>
        <Icon
          name="email"
          size={50}
          backgroundColor="red"
          iconColor="white"  
        />
      </Screen>
  );
}
