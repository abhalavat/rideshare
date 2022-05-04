import { StyleSheet, TouchableOpacity, View, ScrollView, TextInput, Image } from 'react-native';
import { useState, useEffect } from 'react';
import Header from './../components/Header';
import FeedPost from './../components/FeedPost';
import { getDatabase, ref, onValue, get } from "firebase/database";
import searchImg from './../assets/search.png';

export default function Feed(props) {
  const db = getDatabase();

  const [posts, setPosts] = useState({});
  const [search, setSearch] = useState("");

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
      <ScrollView style={styles.container} contentOffset={{x: 0, y: 33}} showsVerticalScrollIndicator={false}>
        <TextInput 
          scrollEnabled={false} 
          multiline={true} 
          value={search} 
          onChangeText={text => setSearch(text)} 
          style={styles.search} 
          placeholder="Search..."
          returnKeyType='done'
          blurOnSubmit={true}
        >
        </TextInput>
        <View style={styles.imgContainer}>
          <Image source={searchImg} style={styles.img}/>
        </View>
        {posts && Object.entries(posts).map(([key, val]) => {
          if (val.location.toLowerCase().includes(search.toLowerCase())) {
            return(
              <TouchableOpacity style={styles.postContainer} key={key} onPress={() => {
                navigation.navigate("IPost", {post: val, postId: key, uid: uid});
              }}>
                <FeedPost location='feed' post={val}/>
              </TouchableOpacity>
            )
          }
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
  postContainer: {
    marginBottom: 10,
  },
  search: {
    paddingTop: 7,
    paddingLeft: 10,
    paddingBottom: 7,
    paddingRight: 10,
    backgroundColor: "#FFF2F2",
    borderRadius: 15,
    borderColor: '#EF5230',
    borderWidth: 1,
    width: '95%',
    left: '2.5%',
  },
  img: {
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
  imgContainer: {
    position: 'absolute',
    right: 20,
    top: 6,
    width: 20,
    height: 20,
    zIndex: 2,
  }
})