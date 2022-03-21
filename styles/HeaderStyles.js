import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        width: '100%',
        top: '8%',
        height: '8%',
        flexDirection: 'row',
    }, 
   profileContainer: {
        justifyContent: 'flex-start',
        bottom: '0%',
        left: '0%',
        width: '20%',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    hamburgerContainer: {
        justifyContent: 'flex-start',
        bottom: '0%',
        left: '0%',
        width: '20%',
    },
    logo: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        bottom: '0%',
        width: '60%',
        height: '100%',
        resizeMode: 'contain',
    },
    touchableOpacityLeft: {
        width: '50%',
        left: '15%',
        top: '25%',
        height: '50%',
    },
    touchableOpacityRight: {
        width: '50%',
        left: '35%',
        top: '25%',
        height: '50%',
    },
})