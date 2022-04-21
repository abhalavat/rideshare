import { StyleSheet, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import Header from './../components/Header';
import FeedPost from './../components/FeedPost';
import { getDatabase, ref, onValue, get } from "firebase/database";

export default function Feed(props) {
  const db = getDatabase();

  const [posts, setPosts] = useState({});

  const dataRef = ref(db, 'posts');

  useEffect(() => {
    get(dataRef).then((response) => {
      setPosts(reverseObj(response.val()));
    })
    onValue(dataRef, (response) => {
      setPosts(reverseObj(response.val()));
    })
  }, [])

  const reverseObj = (obj) => {
    let newObj = {}
  
    Object.keys(obj)
      .sort()
      .reverse()
      .forEach((key) => {
        newObj[key] = obj[key]
      })
  
    return newObj  
  }

  const navigation = props.navigation;
  return (
    <View style={styles.screen}>
      <Header navigation={navigation}/>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.viewContainer}>
            {posts && Object.entries(posts).map(([key, val]) => {
              return(
                <TouchableOpacity key={key} onPress={() => {
                  navigation.navigate("IPost", {post: val, postId: key});
                }}>
                  <FeedPost location='feed' post={val}/>
                </TouchableOpacity>
              )
            })}
          </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    marginTop: '8%',
  },
  viewContainer: {
    flexDirection: 'column',
    flex: 1,
  }
})