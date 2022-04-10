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
    InterBold: require("./assets/fonts/Inter-Bold.ttf")
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf")

    InterMedium: require("./assets/fonts/Inter-Medium.ttf")

    InterRegukla: require("./assets/fonts/Inter-Regukla.ttf")

        InterBold: require("./assets/fonts/Inter-Bold.ttf")

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
