import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login'; 
import Home from './Home';
import Cadastro from './Cadastro';
import { COLORS } from '../../constants/Colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={COLORS}>
      <StatusBar />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NativeBaseProvider>
  );
}
