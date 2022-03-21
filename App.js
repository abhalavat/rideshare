import { StyleSheet, Text, View } from 'react-native';
import Feed from './screens/Feed.js';
import IPost from './screens/IPost.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
          <Stack.Screen name="Feed" component={Feed} options={{headerShown: false}}/>
          <Stack.Screen name="IPost" component={IPost} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
