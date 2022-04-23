import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useState } from 'react';
import { ref, push, set, onValue, get, getDatabase, setValue } from "firebase/database";

import styles from '../styles/SignupStyles';

export default function Signup(props) {
  const navigation = props.navigation;
  const uid = props.route.params.uid;
  const [text, setText] = useState("");

  const db = getDatabase();
  let userRef = ref(db, 'users/' + uid);

  const handleSubmit = () => {
    set(userRef, text);
    navigation.navigate("Feed", {uid: uid});
  }


  return (
    <View style={styles.screen}>
      <TextInput style={styles.textInput} value={text} onChangeText={newText => setText(newText)}></TextInput>
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

