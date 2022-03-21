import { StyleSheet, Text, View } from 'react-native';
import Feed from './screens/Feed.js';
import IPost from './screens/IPost.js';

export default function App() {
  return (
    <View style={styles.container}>
      <IPost/>
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
