import { Text, View, Image } from 'react-native';
import time from './../assets/time.png';
import people from './../assets/people.png'
import cost from './../assets/cost.png';
import styles from '../styles/FeedPostStyles';
import shadowStyles from '../styles/ShadowStyles';

export default function FeedPost(props) {
    const feed = props.location == 'feed';
    const { location, rsvpd, capacity, start } = props.post;
    const timeText = props.post.time;
    const price = props.post.price;

    let spots = <Text style={styles.boxText}>{rsvpd}{'/'}{capacity}</Text>;
    if (rsvpd == capacity) {
        spots = <Text style={[styles.boxText, {color: 'red'}]}>{rsvpd}{'/'}{capacity}</Text>;
    }

    return (
        <View style={feed ? [styles.container, shadowStyles.container] : styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{location}</Text>
            </View>
            <View style={styles.start}>
                    <Text style={styles.subtitle}>Starting from: {start}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.box}>
                    <View style={styles.imgContainer}>
                        <Image source={cost} style={styles.img}/>
                    </View>
                    <Text style={[styles.boxText, styles.leftText]}>${price}</Text>
                </View>
                <View style={styles.box}>
                    <View style={styles.imgContainer}>
                        <Image source={people} style={styles.img}/>
                    </View>
                    {spots}
                </View>
                <View style={[styles.box, styles.rightBox]}>
                    <View style={[styles.imgContainer, styles.rightImgContainer]}>
                        <Image source={time} style={styles.img}/>
                    </View>
                    <Text style={[styles.boxText, styles.rightText]}>{timeText}</Text>
                </View>
            </View> 
        </View>
  );
};