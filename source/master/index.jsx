import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
/* screens */
import A from '@/screens/a';
import B from '@/screens/b';

const Master = ({ children }) => {
  const [screen, setScreen] = useState(false);
  const state = useSelector(state => state['foobar']);
  const dispatch = useDispatch();

  const fooHandler = () => {
    dispatch({ type: 'foo' });
  };

  const barHandler = () => {
    dispatch({ type: 'bar' });
  };

  const toggleScreenHandler = () => {
    setScreen(!screen);
  };

  /* 亂寫的，到時候再看看需不需要 */
  const ScreenView = useMemo(() => [A, B][+screen], [screen]);

  return (
    <View style={styles.container}>
      <Text>{children}</Text>
      <Text>foobar state is: {state}</Text>
      <Button onPress={fooHandler} title="foo" />
      <Button onPress={barHandler} title="bar" />
      <ScreenView />
      <Button
        onPress={toggleScreenHandler}
        title={`go to screen ${['A', 'B'][+!screen]}`}
      />
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
