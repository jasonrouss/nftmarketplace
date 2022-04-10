import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const theme = {
  ..DefaultTheme
}
const App = () => {
  return (
  <NavigationContainer>
    <StackNavigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </StackNavigator>
  </NavigationContainer>
  );
}

export default App;
