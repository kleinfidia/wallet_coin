
import React from 'react';
import { Homescreen, Onboardscreen } from './screens';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
   
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Onboard" component={Onboardscreen}/>
        <Stack.Screen name="Homescreens" component={Homescreen}/>
    </Stack.Navigator>
  
   </NavigationContainer>
   
  )
}

export default App;