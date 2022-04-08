import { TouchableOpacity, Keyboard, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
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

  const prices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
              <Text style={styles.subtitle}>Destination</Text>
              <TextInput 
                  scrollEnabled={false} 
                  multiline={true} 
                  value={text} 
                  onChangeText={newText => setText(newText)} 
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
                  value={text} 
                  onChangeText={newText => setText(newText)} 
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
                  value={text} 
                  onChangeText={newText => setText(newText)} 
                  style={styles.input} 
                  placeholder=""
                  returnKeyType='done'
                  blurOnSubmit={true}
              >
              </TextInput>
              <Text style={styles.subtitle}>Mode of Transportation</Text>
              <TextInput 
                  scrollEnabled={false} 
                  multiline={true} 
                  value={text} 
                  onChangeText={newText => setText(newText)} 
                  style={styles.input} 
                  placeholder=""
                  returnKeyType='done'
                  blurOnSubmit={true}
              >
              </TextInput>
              <Text style={styles.subtitle}>Price</Text>
              <View style={styles.input}>
                <SelectDropdown
                  style={styles.input}
                  data={prices}
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
                {/* <Picker 
                  style={styles.picker}
                  selectedValue = {price}
                  onValueChange={(itemValue) => {
                    setPrice(itemValue);
                  }}
                  mode='dropdown'
                  itemStyle={{height: 50}}
                >
                  <Picker.Item style={styles.pick} label="0" value={0}/>
                  <Picker.Item style={styles.pick} label="1" value={1}/>
                  <Picker.Item style={styles.pick} label="2" value={2}/>
                  <Picker.Item style={styles.pick} label="3" value={3}/>
                  <Picker.Item style={styles.pick} label="4" value={4}/>
                  <Picker.Item style={styles.pick} label="5" value={5}/>
                  <Picker.Item style={styles.pick} label="6" value={6}/>
                  <Picker.Item style={styles.pick} label="7" value={7}/>
                  <Picker.Item style={styles.pick} label="8" value={8}/>
                  <Picker.Item style={styles.pick} label="9" value={9}/>
                </Picker> */}
              </View>
              <Text style={styles.subtitle}>Attendees</Text>
              <TextInput 
                  scrollEnabled={false} 
                  multiline={true} 
                  value={text} 
                  onChangeText={newText => setText(newText)} 
                  style={styles.input} 
                  placeholder=""
                  returnKeyType='done'
                  blurOnSubmit={true}
              >
              </TextInput>
              <TouchableOpacity onPress={submitAll} style={styles.submit}>
                  <Text>Submit</Text>
              </TouchableOpacity>
            </View>
        </View>
  );
};
