import { StyleSheet, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import Header from './../components/Header';
import FeedPost from './../components/FeedPost';
import { getDatabase, ref, onValue, get } from "firebase/database";
import addPost from '../assets/add.png';

export default function Feed(props) {
  const db = getDatabase();

  const [posts, setPosts] = useState({});

  const dataRef = ref(db, 'posts');

  useEffect(() => {
    get(dataRef).then((response) => {
      setPosts(response.val());
    })
    onValue(dataRef, (response) => {
      setPosts(response.val());
    })
  }, [])

  const navigation = props.navigation;
  return (
    <View style={styles.screen}>
      <Header/>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          {posts && Object.entries(posts).map(([key, v]) => {
            return(
              <TouchableOpacity key={key} onPress={() => {
                navigation.navigate("IPost", {post: v, postId: key});
              }}>
                <FeedPost color="feed" post={v}/>
              </TouchableOpacity>
            )
          })}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("CreatePost");
      }}>
        <Image style={styles.img} source={addPost}/>
      </TouchableOpacity>
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
    marginTop: '8%',
    position: 'relative',
  },
  viewContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'blue',
  },
  button: {
    borderRadius: 200,
    position: 'absolute',
    right: '5%',
    bottom: '6%',
    width: '20%',
    height: '9%',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
})