import React from 'react';
import { View, Alert } from 'react-native';
/* https://github.com/Dekoruma/react-native-web-modal */
import Modal from 'modal-react-native-web';
import Content from './modal-content';

function Model({ visible, closeHandler }) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      ariaHideApp={false}
      onShow={() => {
        console.log('Modal has been shown.');
      }}
      onDismiss={() => {
        console.log('Modal has been closed.');
      }}
    >
      <Content closeHandler={closeHandler} />
    </Modal>
  );
}

export default Model;
