import { Text, View, Image } from 'react-native';
import styles from '../styles/CommentStyles';
import profile from '../assets/profile.png';

export default function Comment(props) {
    const commenter = props.comment.user;
    const comment = props.comment.text;
    const time = props.comment.time;
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.img} source={profile}/>
                <Text style={styles.name}>{commenter}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.comment}>{comment}</Text>
            </View>
        </View>
    );
};