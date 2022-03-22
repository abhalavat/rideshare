import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import styles from '../styles/LoginStyles';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = props.navigation;

  const user = null;
  const auth = getAuth();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
        })
        .catch(error => alert(error.message));
  }

  const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        navigation.navigate("Feed");
      })
      .catch(error => alert(error.message));
  }

  useEffect(() => {
      const subscriber = onAuthStateChanged(auth, user => {
          if (user) {
              navigation.navigate("Feed");
          }
      })
      return subscriber
  }, [])

  return (
    <View style={styles.screen}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.inputText}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.inputText}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
