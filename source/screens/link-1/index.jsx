import React from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabA from './tab-a';
import TabB from './tab-b';

const Tab = createMaterialTopTabNavigator();

const Link1 = () => {
  const insets = useSafeArea();
  return (
    <Tab.Navigator style={{ paddingTop: insets.top, backgroundColor: '#fff' }}>
      <Tab.Screen name="Tab-A" component={TabA} />
      <Tab.Screen name="Tab-B" component={TabB} />
    </Tab.Navigator>
  );
};

export default Link1;
