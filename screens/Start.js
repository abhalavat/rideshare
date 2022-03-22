import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/StartStyles';
import background from '../assets/start-background.png';

export default function Feed(props) {
  const navigation = props.navigation;
  return (
    <View style={styles.screen}>
        <ImageBackground style={styles.background} source={background}>
            <TouchableOpacity onClick={navigation.navigate("Login")} style={styles.button}>
                <Text style={styles.start}>START {'>'}</Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
  );
};
