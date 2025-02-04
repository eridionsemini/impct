import React, {ReactElement} from 'react';

import {
  createNavigationContainerRef,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from 'screens';

import {RootStackNaviParams} from '../types';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const Stack = createStackNavigator<RootStackNaviParams>();

const RootStackNavi: React.FC = (): ReactElement => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: 'white',
      headerBackTitleVisible: false,
      gestureEnabled: true,
      animationEnabled: true,
      headerShown: false,
    }}>
    <Stack.Screen name="home" component={HomeScreen} />
  </Stack.Navigator>
);

export const RootNavi: React.FC = (): ReactElement => (
  <NavigationContainer theme={theme} ref={navigationRef}>
    <RootStackNavi />
  </NavigationContainer>
);

export const navigationRef = createNavigationContainerRef<RootStackNaviParams>();
