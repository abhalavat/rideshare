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
  const { post, postId } = props.route.params;

  const dataRef = ref(db, 'posts/' + postId + '/comments');
  
  useEffect(() => {
    if (!timeAgo) {
      TimeAgo.addDefaultLocale(en) ;
      setTimeAgo(new TimeAgo('en-US'));
    }
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
        user: "testname",
        time: (new Date()).toISOString()
      });
      setComment("");
      Keyboard.dismiss();
    }
  }
  return (
    <View style={styles.screen}>
      <Header/>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
      >
        <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
          <View style={styles.post}>
            <FeedPost color="post" post={post}></FeedPost>
            <Text style={styles.postContent}>{post.text}</Text>
          </View>
          {comments && Object.entries(comments).map(([key, v]) => {
              return(
                <Comment 
                  timeConvert={timeAgo}
                  comment={v}
                  key={key}
                ></Comment>
              )
            })}
          <View style={styles.addComment}>
            <TextInput 
              scrollEnabled={false} 
              multiline={true} 
              value={comment} 
              onChangeText={text => setComment(text)} 
              style={styles.input} 
              placeholder="Add Comment..."
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
