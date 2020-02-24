import React, { useState } from 'react';
import { Text, TouchableHighlight, View, SafeAreaView } from 'react-native';
import Modal from './modal';

function Link3() {
  const [modalVisible, setModalVisible] = useState(false);
  const closeHandler = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Text>This is top text.</Text>
      <Text>demo with react-native-safe-area-context</Text>
      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text>Show Modal</Text>
      </TouchableHighlight>
      <Text>This is bottom text.</Text>
      {/* modal */}
      <Modal visible={modalVisible} closeHandler={closeHandler} />
    </SafeAreaView>
  );
}

export default Link3;
