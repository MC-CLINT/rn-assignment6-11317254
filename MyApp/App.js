import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import HomeScreen from './HomeScreen';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
