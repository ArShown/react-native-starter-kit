import React from 'react';
import { Text, View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

function Link3() {
  const insets = useSafeArea();
  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Text>This is top text.</Text>
      <Text>demo with react-native-safe-area-context</Text>
      <Text>This is bottom text.</Text>
    </View>
  );
}

export default Link3;
