import { View, Image, TouchableOpacity } from 'react-native';
import logo from './../assets/text-logo.png';
import hamburger from './../assets/hamburger.png';
import styles from './../styles/HeaderStyles';
import post from './../assets/post.png';

export default function Header(props) {

    const navigation = props.navigation;

    return (
        <View style={styles.header}>
            <View style={styles.hamburgerContainer}>
                <TouchableOpacity style={styles.touchableOpacityLeft}>
                    <Image style={styles.img} source={hamburger}></Image>
                </TouchableOpacity>
            </View>
            <Image style={styles.logo} source={logo}></Image>
            <View style={styles.profileContainer}>
                <TouchableOpacity style={styles.touchableOpacityRight} onPress={() => {
                    navigation.navigate("CreatePost");
                }}>
                    <Image style={styles.img} source={post}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
};