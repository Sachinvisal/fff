
import Dash from "./Screens/Dash";
import Deases from "./Screens/Deases";
import Home from "./Screens/Home"
import Login from "./Screens/Login"
import Signup from "./Screens/Signup"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Price from "./Screens/Price";


const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Dash"
          component={Dash}
          options={{
            headerShown: false
          }}
        />
          <Stack.Screen
          name="Deases"
          component={Deases}
          options={{
            headerShown: false
          }}
        />
          <Stack.Screen
          name="Price"
          component={Price}
          options={{
            headerShown: false
          }}
        />
      
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
