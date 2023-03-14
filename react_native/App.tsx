import { Provider as PaperProvider } from 'react-native-paper';
import StackNavigator from "./router/StackNavigator";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
