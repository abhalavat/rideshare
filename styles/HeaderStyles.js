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
    profile: {
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
    hamburger: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    logo: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        bottom: '0%',
        width: '60%',
        height: '100%',
        resizeMode: 'contain',
    },
    touchableOpacity: {
        width: '50%',
        left: '25%',
        top: '25%',
        height: '50%',
    }
})