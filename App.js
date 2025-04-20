import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CameraPage from './src/screens/CameraPage';
import { PermissionsPage } from './src/screens/PermissionsPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PermissionsPage">
        <Stack.Screen name="PermissionsPage" component={PermissionsPage} options={{ headerShown: false }} />
        <Stack.Screen name="CameraPage" component={CameraPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
