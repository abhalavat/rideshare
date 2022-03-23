import { Text, View, Image } from 'react-native';
import time from './../assets/time.png';
import people from './../assets/people.png'
import styles from '../styles/FeedPostStyles';

export default function FeedPost(props) {
    const background = props.color == "post" ?'#E7DAFF' : '#DAC5FF';
    const { location, rsvpd, capacity, start } = props.post;
    const timeText = props.post.time;
    const driver = props.post.driver.name;

    let spots = <Text style={styles.leftText}>{rsvpd}{'/'}{capacity}</Text>;
    if (rsvpd == capacity) {
        spots = <Text style={[styles.leftText, {color: 'red'}]}>{rsvpd}{'/'}{capacity}</Text>;
    }

    return (
        <View backgroundColor={background} style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{location}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.left}>
                    <View style={styles.leftLayer}>
                        <Image style={styles.leftImg} source={people}/>
                        {spots}
                    </View>
                    <View style={styles.leftLayer}>
                        <Image style={styles.leftImg} source={time}/>
                        <Text style={styles.leftText}>{timeText}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={styles.rightText}>Start: {start}</Text>
                    <Text style={styles.rightText}>Driver: {driver}</Text>
                </View>
            </View> 
        </View>
  );
};