import React from 'react';
import { View, Alert, Modal } from 'react-native';
import Content from './modal-content';

function Model({ visible, closeHandler }) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onShow={() => {
        Alert.alert('Modal has been shown.');
      }}
      onRequestClose={() => {
        /* android required */
        /* 在安卓按返回鍵時觸發 */
        closeHandler();
        Alert.alert('Modal has been closed.');
      }}
      onDismiss={() => {
        console.log('onDismiss');
        /* ios */
        Alert.alert('Modal has been closed.');
      }}
    >
      <Content closeHandler={closeHandler} />
    </Modal>
  );
}

export default Model;
