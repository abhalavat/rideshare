import { StyleSheet, Text, View } from 'react-native';
import Feed from './screens/Feed.js';
import IPost from './screens/IPost.js';
import Login from './screens/Login.js';
import CreatePost from './screens/CreatePost.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase';


export default function App() {
  const Stack = createNativeStackNavigator();
  const app = initializeApp(firebaseConfig);

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Feed" component={Feed} options={{headerShown: false}}/>
          <Stack.Screen name="IPost" component={IPost} options={{headerShown: false}}/>
          <Stack.Screen name="CreatePost" component={CreatePost} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
