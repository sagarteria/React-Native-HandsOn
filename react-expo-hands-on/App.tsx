import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import NewsScreen from './screens/NewsScreen';
import WeatherScreen from './screens/WeatherScreen';
import PhotoCaptureScreen from './screens/PhotoCaptureScreen';
import ExplicitPermissionScreen from './screens/ExplicitPermissionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="About" component={AboutScreen} />
       <Stack.Screen name="Contact" component={ContactScreen} />
       <Stack.Screen name="Register" component={RegistrationScreen} />
       <Stack.Screen name="News" component={NewsScreen} />
       <Stack.Screen name="Weather" component={WeatherScreen} />
       <Stack.Screen name="PhotoCapture" component={PhotoCaptureScreen} />
       <Stack.Screen name="ExplicitPermission" component={ExplicitPermissionScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}
