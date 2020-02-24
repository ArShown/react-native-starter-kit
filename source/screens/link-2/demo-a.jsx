import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function DemoA({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Demo A Screen</Text>
      <Button
        title="Go to Demo A... again"
        onPress={() => navigation.push('DemoA')}
      />
      <Button
        title="Go to DemoB"
        onPress={() => navigation.navigate('DemoB')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default DemoA;
