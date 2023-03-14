import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNav from './BottomNav';
import TestScreen from "../screens/TestScreen";

const Stack = createStackNavigator();

export default function StackNavigator(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={BottomNav} />
      <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
  );
};