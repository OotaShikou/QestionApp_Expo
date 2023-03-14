import * as React from 'react';
import { Appbar } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import { AppBarProps } from "../types/AppBar";

const AppBar = ({screen_name, title}:AppBarProps) => {
  const navigation: any = useNavigation();
  const _goBackScreen = () => navigation.navigate(screen_name);

  return (
    <Appbar.Header mode='small'>
      <Appbar.BackAction onPress={_goBackScreen} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default AppBar;