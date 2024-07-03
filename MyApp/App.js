import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    
    
          <View style={styles.container}>
          
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="Cart" component={CartScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
        </View>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
   
  },
});
