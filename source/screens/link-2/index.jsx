import React from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';
import DemoA from './demo-a';
import DemoB from './demo-b';

const Stack = createStackNavigator();

function Link2() {
  const insets = useSafeArea();
  const headerHeight = useHeaderHeight();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          height: headerHeight - insets.top + 10
        },
        headerTitleContainerStyle: {
          marginTop: insets.top * -1
        },
        headerLeftContainerStyle: {
          marginTop: insets.top * -1
        },
        headerRightContainerStyle: {
          marginTop: insets.top * -1
        }
      }}
    >
      <Stack.Screen name="DemoA" component={DemoA} />
      <Stack.Screen name="DemoB" component={DemoB} />
    </Stack.Navigator>
  );
}

export default Link2;
