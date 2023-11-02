import{ createNativeStackNavigator } from 
'@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function NavigationStack(){
   return (
<Stack.Navigator>
<Stack.Screen name = 'Home' component ={HomeScreen} />
<Stack.Screen name = 'Login' component ={LoginScreen} />

</Stack.Navigator>

   )

}