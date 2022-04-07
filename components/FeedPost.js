import { Text, View, Image } from 'react-native';
import time from './../assets/time.png';
import people from './../assets/people.png'
import cost from './../assets/cost.png';
import styles from '../styles/FeedPostStyles';

export default function FeedPost(props) {
    // const background = props.color == "post" ?'#E7DAFF' : '#DAC5FF';
    const background = '#EF5230';
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
            <View style={styles.start}>
                    <Text style={styles.subtitle}>Starting from: {start}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.box}>
                    <View style={styles.imgContainer}>
                        <Image source={cost} style={styles.img}/>
                    </View>
                    <Text style={[styles.boxText, styles.leftText]}>$3</Text>
                </View>
                <View style={styles.box}>
                    <View style={styles.imgContainer}>
                        <Image source={people} style={styles.img}/>
                    </View>
                    <Text style={styles.boxText}>{spots}</Text>
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