import StackNavigator from "./router/StackNavigator";
import { ThemeContextProvider, useTheme } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <StackNavigator />
    </ThemeContextProvider>
  );
}
