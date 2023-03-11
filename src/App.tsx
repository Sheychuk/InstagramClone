import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {withAuthenticator} from '@aws-amplify/ui-react-native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar />
      <Router />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
