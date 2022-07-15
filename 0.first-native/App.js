import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Countries from './Components/Countries';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Visiting Countries !</Text>
      <Countries></Countries>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
