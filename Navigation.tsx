import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LogInPage from './screens/LogInPage';
import RegisterPage from './screens/RegisterPage';


export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function Navigation() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LogInPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
      </Stack.Navigator>
  
  );
}
