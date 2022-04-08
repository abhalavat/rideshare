import { View, Image, TouchableOpacity } from 'react-native';
import logo from './../assets/text-logo.png';
import home from './../assets/home.png';
import styles from './../styles/HeaderStyles';
import post from './../assets/post.png';

export default function Header(props) {

    const navigation = props.navigation;

    return (
        <View style={styles.header}>
            <View style={styles.homeContainer}>
                <TouchableOpacity style={styles.touchableOpacityLeft} onPress={() => {
                    navigation.navigate("Feed");
                }}>
                    <Image style={styles.img} source={home}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.logo}>
                <Image style={[styles.img, styles.logoImg]} source={logo}></Image>
            </View>
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