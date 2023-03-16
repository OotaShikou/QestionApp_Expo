import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import { useTheme } from "../../context/ThemeContext";

export default function HomeScreen() {
  const {toggleThemeType, themeType, isDarkTheme, theme} = useTheme()
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text>ホーム画面</Text>
      <StatusBar style="auto" />
      <Button mode="contained" onPress={toggleThemeType}>
        ToggleTheme
      </Button>
      <Text>{themeType}</Text>
      <Text>{isDarkTheme}</Text>
      <Text>{theme.colors.background}</Text>

      <Button icon="camera" mode="contained" onPress={() => navigation.push('Test')}>
        Move Test Page
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
