import { TouchableOpacity, Keyboard, KeyboardAvoidingView, Text, View, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';
import Header from '../components/Header';
import styles from '../styles/CreatePostStyles';
import { ref, push, set, onValue, get, getDatabase } from "firebase/database";

export default function CreatePost(props) {
  const db = getDatabase();

  const [text, setText] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [start, setStart] = useState("");
  const [time, setTime] = useState("");

  const dataRef = ref(db, 'posts');

//   function addComment() {
//     if (comment != "") {
//       const newPostRef = push(dataRef);
//       set(newPostRef, {
//         text: comment,
//         user: "testname",
//         time: new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
//       });
//       setComment("");
//       Keyboard.dismiss();
//     }
//   }

  function submitAll() {
    // check if all fields are filled in first
    // const newPostRef = push(dataRef);
    // set(newPostRef, {
    //     text: comment,
    //     user: "testname",
    //     time: new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
    // });
    // reset vals to default
    Keyboard.dismiss();
  }

    return (
        <View style={styles.screen}>
            <Header/>
            <View style={styles.container}>
                <View style={styles.addComment}>
                    <TextInput 
                        scrollEnabled={false} 
                        multiline={true} 
                        value={text} 
                        onChangeText={newText => setText(newText)} 
                        style={styles.input} 
                        placeholder="Add Body..."
                        returnKeyType='done'
                        blurOnSubmit={true}
                    >
                    </TextInput>
                    <TouchableOpacity onPress={submitAll} style={styles.submit}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
  );
};
