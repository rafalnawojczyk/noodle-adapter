import { StyleSheet, Text, View } from 'react-native';

import * as NoodleAdapter from 'noodle-adapter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{NoodleAdapter.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
