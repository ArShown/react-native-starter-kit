import React from 'react';
import { Dimensions, Platform } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabA from './tab-a';
import TabB from './tab-b';

const Tab = createMaterialTopTabNavigator();

const Link1 = () => {
  const insets = useSafeArea();
  const width = Dimensions.get('window').width;
  const tabWidth =
    (width - 30) /
    4; /* Subtract margins from your screen width. In your case 2*15= 30 */
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
      style={{ paddingTop: insets.top, backgroundColor: '#fff' }}
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
