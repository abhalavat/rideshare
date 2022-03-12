import { View, Image, TouchableOpacity } from 'react-native';
import logo from './../assets/text-logo.png';
import hamburger from './../assets/hamburger.png';
import styles from './../styles/HeaderStyles';
import profile from './../assets/profile.png'

export default function Header() {

  return (
    <View style={styles.header}>
        <View style={styles.hamburgerContainer}>
            <TouchableOpacity style={styles.touchableOpacity}>
                <Image style={styles.hamburger} source={hamburger}></Image>
            </TouchableOpacity>
        </View>
        <Image style={styles.logo} source={logo}></Image>
        <View style={styles.profileContainer}>
            <TouchableOpacity style={styles.touchableOpacity}>
                <Image style={styles.profile} source={profile}></Image>
            </TouchableOpacity>
        </View>
    </View>
  );
};