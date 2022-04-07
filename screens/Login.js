import { ImageBackground, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { useEffect, useState } from 'react';
import styles from '../styles/LoginStyles';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import icon from '../assets/icon.png';
import background from '../assets/start-background.png';
import text from '../assets/text-logo-white.png';

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = props.navigation;

  const user = null;
  const auth = getAuth();

  const handleSignUp = () => {
    if (email.substring(email.length - 11) =='@utexas.edu') {
      createUserWithEmailAndPassword(auth, email, password)
          .then(userCredentials => {
              const user = userCredentials.user;
          })
          .catch(error => alert(error.message));
    } else {
      alert('Email must be a valid utexas.edu email!');
    }
  }

  const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        navigation.navigate("Feed");
      })
      .catch(error => {
        if (error.message == "Firebase: Error (auth/user-not-found)."){
          alert("An account does not exist with that email. Please create an account.");
        } else if (error.message == "Firebase: Error (auth/wrong-password)."){
          alert("Incorrect Password. Please try again.");
        } else {
          alert(error.message);
        }
      });
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
      <ImageBackground style={styles.background} source={background}>
        <View style={styles.logoContainer}>
          <Image source={icon} style={styles.img}/>
        </View>
        <View style={styles.textContainer}>
          <Image source={text} style={styles.img}/>
        </View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.inputText}
          keyboardType="email-address"
          returnKeyType='done'
          blurOnSubmit={true}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.inputText}
          secureTextEntry
          returnKeyType='done'
          blurOnSubmit={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
