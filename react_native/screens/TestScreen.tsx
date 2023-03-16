import { View } from 'react-native';
import AppBar from "../components/AppBar";
import {useNavigation} from '@react-navigation/native';
import { useTheme } from "../context/ThemeContext";
import { Text, Button } from 'react-native-paper';

export default function HomeScreen() {
  const {toggleThemeType, themeType, isDarkTheme, theme} = useTheme()
  return (
    <View>
      <AppBar screen_name="Main" title="Home"/>
      <Text>TEST</Text>
      <Button mode="contained" onPress={toggleThemeType}>
        ToggleTheme
      </Button>
      <Text>{themeType}</Text>
      <Text>{isDarkTheme}</Text>
      <Text>{theme.colors.background}</Text>
    </View>
  );
}
