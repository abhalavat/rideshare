import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from 'react';
import Header from './../components/Header';

export default function Feed() {
  const [posts, setPosts] = useState([
    {text: 'test1', key: '1'},
    {text:'test2', key: '2'},
  ]);
  return (
    <View style={styles.screen}>
      <Header/>
      {/* <ScrollView style={styles.container}>
          {posts.map(post => {
            <View key={post.id} style={styles.viewContainer}>
              <Text style={styles.text}>{post.text}</Text>
            </View>
          })}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
  },
  viewContainer: {
    flex: 1,
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'blue',
  },
  text: {
    fontSize: 10,
  },
})