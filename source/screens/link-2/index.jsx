import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DemoA from './demo-a';
import DemoB from './demo-b';

const Stack = createStackNavigator();

function Link2() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DemoA" component={DemoA} />
      <Stack.Screen name="DemoB" component={DemoB} />
    </Stack.Navigator>
  );
}

export default Link2;
