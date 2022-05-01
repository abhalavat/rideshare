import { Text, View, Image, ImageBackground } from 'react-native';
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

    const src = feed ? props.post.img : "";

    return (
        <View style={feed ? [styles.container, shadowStyles.container] : styles.container}>
        <ImageBackground style={styles.background} source={{uri: src}}>
        {/* <a href="https://ibb.co/4fbDypc"><img src="https://i.ibb.co/g70X1JG/zilkerpark-1.png" alt="zilkerpark-1" border="0"></a>
<a href="https://ibb.co/hChD8x8"><img src="https://i.ibb.co/vDgZzCz/mt-bonnell-1.png" alt="mt-bonnell-1" border="0"></a>
<a href="https://ibb.co/JRqpcY5"><img src="https://i.ibb.co/FbXYhQg/imfields-1.png" alt="imfields-1" border="0"></a>
<a href="https://ibb.co/5WvB2p5"><img src="https://i.ibb.co/tMc83jb/heb-photo-1.png" alt="heb-photo-1" border="0"></a>
<a href="https://ibb.co/ctbVhtJ"><img src="https://i.ibb.co/82ztg2M/aus-airport-1.png" alt="aus-airport-1" border="0"></a>
<a href="https://ibb.co/68hrc35"><img src="https://i.ibb.co/m0sbrL7/barton-creek-square-04-1.png" alt="barton-creek-square-04-1" border="0"></a>
<a href="https://ibb.co/ZKTf5tf"><img src="https://i.ibb.co/S0v6bW6/domain-northside-1.png" alt="domain-northside-1" border="0"></a>
<a href="https://ibb.co/QphGJWj"><img src="https://i.ibb.co/4KCxFbg/bennu-highland-1.png" alt="bennu-highland-1" border="0"></a><br /><a target='_blank' href='https://500pxdownload.com/'>instagram downloader high quality</a><br /> */}
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
        </ImageBackground>
        </View>
  );
};