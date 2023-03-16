import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import HomeScreen from "../screens/main/HomeScreen";
import CreateScreen from "../screens/main/CraeteScreen"

const BottomNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'Create', title: 'Create', focusedIcon: 'album', badge:3 },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: HomeScreen,
    Create: CreateScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
      keyboardHidesNavigationBar={true}
      // barStyle={{ backgroundColor: '#694fad' }}
    />
  );
};

export default BottomNavigator;