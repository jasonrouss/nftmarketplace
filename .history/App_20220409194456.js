import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();
import Home from "./screens/Home";
import Details from "./screens/Details";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: "transparent",
  },
};
const App = () => {

  const [loaded] = useFonts({
    InterBold: require()
  })
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home " component={Home} />
        <Stack.Screen name="Details " component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
