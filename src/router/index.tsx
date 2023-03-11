import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import bottomHomeNavigator from './bottomHomeNavigator.routes';
import StoryScreen from '../screens/StoryScreen';
import {Story} from '../data/types';

const RootStack = createStackNavigator();

export type RootStackParamList = {
  Story: Story | undefined;
};

const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={'Instagram'}
      component={bottomHomeNavigator}
      options={{
        headerShown: false,
      }}
    />
    <RootStack.Screen
      name="Story"
      component={StoryScreen}
      options={{
        headerShown: false,
      }}
    />
  </RootStack.Navigator>
);

export default Router;
