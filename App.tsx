import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import RegistrationScreen from './screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="About" component={AboutScreen} />
       <Stack.Screen name="Contact" component={ContactScreen} />
       <Stack.Screen name="Register" component={RegistrationScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}
