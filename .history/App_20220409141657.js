import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer , DefaultTheme} from "@react-navigation"
import {useFonts} from '/scree'



export default function App() {



  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
