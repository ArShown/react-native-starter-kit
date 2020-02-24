import React from 'react';
import { Dimensions, Platform } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabA from './tab-a';
import TabB from './tab-b';

const Tab = createMaterialTopTabNavigator();

const Link1 = () => {
  const width = Dimensions.get('window').width;
  const tabWidth = width / 4;
  return (
    <Tab.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        tabStyle: {
          width: tabWidth
        },
        /* 底線(line at the bottom of the tab) */
        indicatorStyle: {
          width: Platform.OS === 'web' ? 0 : tabWidth
        }
      }}
      style={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen name="Tab-A-I" component={TabA} />
      <Tab.Screen name="Tab-B-I" component={TabB} />
      <Tab.Screen name="Tab-A-II" component={TabA} />
      <Tab.Screen name="Tab-B-II" component={TabB} />
      <Tab.Screen name="Tab-A-III" component={TabA} />
      <Tab.Screen name="Tab-B-III" component={TabB} />
    </Tab.Navigator>
  );
};

export default Link1;
