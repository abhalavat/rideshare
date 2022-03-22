import { Text, View, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';
import Header from '../components/Header';
import styles from '../styles/IPostStyles';
import Comment from '../components/Comment';
import FeedPost from '../components/FeedPost';

export default function IPost(props) {
  const [comments, setComments] = useState([
    {key: '1', user: 'Amy L.', text: 'Omg wait can I come, this seems fun!! and this is a test to see how this code handles text that wraps and is super long and multiple lines.'},
    {key: '2', user: 'Ayush B.', text: 'this sounds cool, reach out to me @ 555-555-5555'},
    {key: '3', user: 'Aidan T.', text: 'is there also space for my roommate??'},
    {key: '4', user: 'Jack P.', text: 'if Aidan\'s^^^ roommate doesnt come, lemme come'},
    {key: '5', user: 'Jane D.', text: 'this is exciting to get to know these ut ppl!'},
    {key: '6', user: 'John A.', text: 'i\'ll come next time for sure, just lmk. my insta is @user.name and u can reach me on that plus more words ... '},
    {key: '7', user: 'Emily P.', text: 'omg this is my fav spot in austin!!'},
    {key: '8', user: 'Anna A.', text: 'this is very cool!'},
    {key: '9', user: 'Sam O.', text: 'im running out of ideas for demo comments'},
  ]);
  const post = props.route.params.post.post;
  return (
    <View style={styles.screen}>
      <Header/>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.post}>
            <FeedPost color="post" post={post}></FeedPost>
            <Text style={styles.postContent}>I plan on leaving exactly at the scheduled time so plz be early! Comment if you wanna come with. I'm not sure how long I want to stay but we can talk about that before we go! I wanna hang out with new people so if you do too, let's go together!</Text>
          </View>
          {comments.map(comment => {
              return(
                <Comment comment={comment} key={comment.key}></Comment>
              )
            })}
          <View style={styles.addComment}>
            <TextInput placeholder="Add Comment..."></TextInput>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
