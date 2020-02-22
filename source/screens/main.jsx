import React, { useState } from 'react';
import { Platform } from 'react-native';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Link1 from './link-1';
import Link2 from './link-2';
import Link3 from './link-3';

const Tab = createBottomTabNavigator();

const TabIcon = ({ color, size }) => (
  <Ionicons
    name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    size={size}
    style={{ marginBottom: -3 }}
    color={color}
  />
);

const Main = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const finishHandler = () => {
    setLoadingComplete(true);
  };

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={finishHandler}
      />
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Link1"
          component={Link1}
          options={{ tabBarIcon: TabIcon }}
        />
        <Tab.Screen
          name="Link2"
          component={Link2}
          options={{ tabBarIcon: TabIcon }}
        />
        <Tab.Screen
          name="Link3"
          component={Link3}
          options={{ tabBarIcon: TabIcon }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

/* 準備資源 */
const loadResourcesAsync = async function() {
  await Promise.all([]);
};

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

export default Main;
