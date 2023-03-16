import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';
import TestScreen from "../screens/TestScreen";

const Stack = createStackNavigator();

export default function StackNavigator(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={BottomNavigator} />
      <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
  );
};