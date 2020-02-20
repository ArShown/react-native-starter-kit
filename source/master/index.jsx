import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

const Master = ({ children }) => {
  const state = useSelector(state => state['foobar']);
  const dispatch = useDispatch();

  const fooHandler = () => {
    dispatch({ type: 'foo' });
  };

  const barHandler = () => {
    dispatch({ type: 'bar' });
  };

  return (
    <View style={styles.container}>
      <Text>{children}</Text>
      <Text>foobar state is: {state}</Text>
      <Button onPress={fooHandler} title="foo"  />
      <Button onPress={barHandler} title="bar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default Master;
