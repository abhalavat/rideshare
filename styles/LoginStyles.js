import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputText: {
        fontSize: 20,
        width: '70%',
        backgroundColor: '#F3EDFF',
        borderRadius: 50,
        marginBottom: '3%',
        padding: '2%',
    },
    button: {
        backgroundColor: '#F27559',
        borderRadius: 50,
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '3%',
        paddingBottom: '3%',
        marginTop: '2%',
        marginBottom: '1%',
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    topButton: {
        marginTop: '10%'
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
    errorText: {
        marginTop: '2%',
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        color: 'red',
        padding: '1%',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    logoContainer: {
        width: '50%',
        height: '25%',
        marginTop: '15%',
        marginBottom: '8%'
    },
    textContainer: {
        width: '70%',
        height: '10%',
        marginBottom: '-2%',
    },
    prompt: {
        color: 'white',
        marginBottom: '5%',
        fontSize: 16
    },
    background: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
})