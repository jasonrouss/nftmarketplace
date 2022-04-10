import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation";
import { useFonts } from "expo-fonts";

export default function App() {
  return (
  <NavigationContainer>
    <StackNavigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </StackNavigator>
  </NavigationContainer>
  );
}
