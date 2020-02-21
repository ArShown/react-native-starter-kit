import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function DemoB({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Demo B Screen</Text>
      <Button
        title="Go to Demo B... again"
        onPress={() => navigation.push('DemoB')}
      />
      <Button
        title="Go to DemoA"
        onPress={() => navigation.navigate('DemoA')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in this stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default DemoB;
