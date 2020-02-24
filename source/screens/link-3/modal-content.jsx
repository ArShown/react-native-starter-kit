import React from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { Text, TouchableHighlight, View, SafeAreaView } from 'react-native';

function ModelContent({ closeHandler }) {
  const insets = useSafeArea();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <TouchableHighlight
        style={{
          position: 'absolute',
          right: insets.right + 10,
          top: insets.top + 10
        }}
        onPress={closeHandler}
      >
        <Text>Close</Text>
      </TouchableHighlight>
      <Text>Hello World!</Text>
    </SafeAreaView>
  );
}

export default ModelContent;
