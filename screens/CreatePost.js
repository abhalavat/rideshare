import { TouchableOpacity, Keyboard, Text, View, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import styles from '../styles/CreatePostStyles';
import { ref, push, set, onValue, get, getDatabase } from "firebase/database";
import SelectDropdown from 'react-native-select-dropdown'

export default function CreatePost(props) {
  const db = getDatabase();

  const [text, setText] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [start, setStart] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState();
  const [mode, setMode] = useState("");
  const [user, setUser] = useState("");

  const uid = props.route.params.uid;

  const prices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const modes = ["Car", "Bus", "Walking"];

  const dataRef = ref(db, 'posts');
  const userRef = ref(db, 'users/' + uid);

  useEffect(() => {
    get(userRef).then((response) => {
      setUser(response.val());
    })
  })

  function submitAll() {
    const newPostRef = push(dataRef);
    set(newPostRef, {
        text: text,
        driver: {name: user, uid: uid},
        capacity: capacity,
        location: location,
        price: price,
        rsvpd: 0,
        start: start,
        time: time,
        img: "https://i.ibb.co/vDgZzCz/mt-bonnell-1.png"
    });
    setLocation("");
    setText("");
    setCapacity("");
    setStart("");
    setTime("");
    setPrice("");
    setMode("");
    Keyboard.dismiss();
    props.navigation.navigate("Feed", {uid: uid})
  }

    return (
        <View style={styles.screen}>
            <Header navigation={props.navigation} uid={uid}/>
            <View style={styles.container}>
              <Text style={styles.subtitle}>Destination</Text>
              <TextInput 
                  scrollEnabled={false} 
                  multiline={true} 
                  value={location} 
                  onChangeText={newText => setLocation(newText)} 
                  style={styles.input} 
                  placeholder=""
                  returnKeyType='done'
                  blurOnSubmit={true}
              >
              </TextInput>
              <Text style={styles.subtitle}>Starting Location</Text>
              <TextInput 
                  scrollEnabled={false} 
                  multiline={true} 
                  value={start} 
                  onChangeText={newText => setStart(newText)} 
                  style={styles.input} 
                  placeholder=""
                  returnKeyType='done'
                  blurOnSubmit={true}
              >
              </TextInput>
              <Text style={styles.subtitle}>Starting Time</Text>
              <TextInput 
                  scrollEnabled={false} 
                  multiline={true} 
                  value={time} 
                  onChangeText={newText => setTime(newText)} 
                  style={styles.input} 
                  placeholder=""
                  returnKeyType='done'
                  blurOnSubmit={true}
              >
              </TextInput>
              <Text style={styles.subtitle}>Mode of Transportation</Text>
              <View style={styles.dropdown}>
                <SelectDropdown
                  style={styles.dropdown}
                  buttonStyle={styles.options}
                  data={modes}
                  defaultButtonText={"Select a mode of transport"}
                  onSelect={(selecteditem) => {
                    setMode(selecteditem);
                  }}
                  buttonTextAfterSelection={(selecteditem) => {
                    return selecteditem;
                  }}
                  rowTextForSelection={(selecteditem) => {
                    return selecteditem;
                  }}
                />
              </View>
              <Text style={styles.subtitle}>Price</Text>
              <View style={styles.dropdown}>
                <SelectDropdown
                  style={styles.dropdown}
                  buttonStyle={styles.options}
                  data={prices}
                  defaultButtonText={"Select a price"}
                  onSelect={(selecteditem) => {
                    setPrice(selecteditem);
                  }}
                  buttonTextAfterSelection={(selecteditem) => {
                    return selecteditem;
                  }}
                  rowTextForSelection={(selecteditem) => {
                    return selecteditem;
                  }}
                />
              </View>
              <Text style={styles.subtitle}>Attendees</Text>
              <TextInput 
                  scrollEnabled={false} 
                  multiline={true} 
                  value={capacity} 
                  onChangeText={newText => setCapacity(newText)} 
                  style={styles.input} 
                  placeholder=""
                  returnKeyType='done'
                  blurOnSubmit={true}
                  keyboardType='numeric'
              >
              </TextInput>
              <Text style={styles.subtitle}>Description</Text>
              <TextInput 
                  scrollEnabled={false} 
                  multiline={true} 
                  value={text} 
                  onChangeText={newText => setText(newText)} 
                  style={styles.description} 
                  placeholder=""
                  returnKeyType='done'
                  blurOnSubmit={true}
              >
              </TextInput>
              <TouchableOpacity onPress={submitAll} style={styles.submit}>
                  <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            </View>
        </View>
  );
};
