import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,colors:{
    ...DefaultTheme.colors,
    backgroundColor: 'transparent'
  }
}
const App = () => {
  return (
  <NavigationContainer theme={theme}>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
