import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import { useState } from 'react';
import Header from './../components/Header';
import FeedPost from './../components/FeedPost';

export default function Feed(props) {
  const [posts, setPosts] = useState([
    {key: '1', location: 'HEB', people: 4, time: '5:00 PM', start: 'Villas on Rio', driver: 'Sarah G.'},
    {key: '2', location: 'IM Fields', people: 5, time: '7:00 PM', start: 'RecSports', driver: 'Jamie L.'},
    {key: '3', location: 'Mt. Bonnell', people: 2, time: '12:00 PM', start: 'Inspire on 22nd', driver: 'Jose R.'},
    {key: '4', location: 'Zilker Park', people: 5, time: '1:00 PM', start: '26 West', driver: 'Emily L.'},
    {key: '5', location: 'AUS Airport', people: 1, time: '10:30 AM', start: 'San Jacinto Hall', driver: 'Jada M.'},
    {key: '6', location: 'Goodwill', people: 4, time: '4:00 PM', start: 'Dobie', driver: 'Pranav G.'},
  ]);
  const navigation = props.navigation;
  return (
    <View style={styles.screen}>
      <Header/>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          {posts.map(post => {
            return(
              <TouchableOpacity key={post.key} onPress={() => {
                navigation.navigate("IPost", {post: {post}})
              }}>
                <FeedPost color="feed" post={post}/>
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
})