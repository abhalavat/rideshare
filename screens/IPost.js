import { TouchableOpacity, Keyboard, KeyboardAvoidingView, Text, View, ScrollView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import styles from '../styles/IPostStyles';
import Comment from '../components/Comment';
import FeedPost from '../components/FeedPost';
import { ref, push, set, onValue, get, getDatabase } from "firebase/database";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

export default function IPost(props) {
  const db = getDatabase();
  
  const [comments, setComments] = useState({});
  const [comment, setComment] = useState("");
  const [timeAgo, setTimeAgo] = useState();
  const [user, setUser] = useState({});
  const { post, postId, uid } = props.route.params;

  const dataRef = ref(db, 'posts/' + postId + '/comments');

  const userRef = ref(db, 'users/' + uid);
  
  useEffect(() => {
    if (!timeAgo) {
      TimeAgo.addLocale(en);
      setTimeAgo(new TimeAgo('en-US'));
    }
    get(userRef).then((response) => {
      setUser({name: response.val()});
    })
    user.name = get(userRef);
    get(dataRef).then((response) => {
      setComments(response.val());
    })
    onValue(dataRef, (response) => {
      setComments(response.val());
    })
  }, [])

  function addComment() {
    if (comment != "") {
      const newPostRef = push(dataRef);
      set(newPostRef, {
        text: comment,
        user: user.name,
        time: (new Date()).toISOString()
      });
      setComment("");
      Keyboard.dismiss();
    }
  }

  const navigation = props.navigation;

  return (
    <View style={styles.screen}>
      <Header navigation={navigation} uid={uid}/>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
      >
        <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} keyboardDismissMode={'interactive'}>
          <View style={styles.post}>
            <FeedPost location='ipost' post={post}></FeedPost>
            <Text style={styles.postContent}>{post.text}</Text>
            <Text style={[styles.postContent, styles.driver]}>Driver: {post.driver.name}</Text>
          </View>
          {comments && <View style={styles.commentContainer}>
            {Object.entries(comments).map(([key, v]) => {
              return(
                <Comment 
                  timeConvert={timeAgo}
                  comment={v}
                  key={key}
                ></Comment>
              )
            })}
          </View>}
          <View style={styles.addComment}>
            <TextInput 
              scrollEnabled={false} 
              multiline={true} 
              value={comment} 
              onChangeText={text => setComment(text)} 
              style={styles.input} 
              placeholder="Add Comment..."
              // placeholderTextColor = '#F4866E'
              returnKeyType='done'
              blurOnSubmit={true}
            >
            </TextInput>
            <TouchableOpacity onPress={addComment} style={styles.submit}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
