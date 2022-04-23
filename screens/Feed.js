import { StyleSheet, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import Header from './../components/Header';
import FeedPost from './../components/FeedPost';
import { getDatabase, ref, onValue, get } from "firebase/database";

export default function Feed(props) {
  const db = getDatabase();

  const [posts, setPosts] = useState({});

  const uid = props.route.params.uid;

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
      <Header navigation={navigation} uid={uid}/>
      <ScrollView style={styles.container} bounces={true} showsVerticalScrollIndicator={false}>
          {posts && Object.entries(posts).map(([key, val]) => {
            return(
              <TouchableOpacity key={key} onPress={() => {
                navigation.navigate("IPost", {post: val, postId: key, uid: uid});
              }}>
                <FeedPost location='feed' post={val}/>
              </TouchableOpacity>
            )
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    marginTop: '8%',
  },
})