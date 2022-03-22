import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputText: {
        fontSize: 25,
        width: '60%',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#F3EDFF',
        borderRadius: 10,
        marginBottom: '3%',
        paddingLeft: '1%',
        paddingTop: '1%',
        paddingBottom: '1%',
    },
    button: {
        borderWidth: 1,
        backgroundColor: '#DFC4FF',
        borderColor: 'black',
        borderRadius: 10,
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingTop: '1%',
        paddingBottom: '1%',
        marginTop: '2%',
    },
    buttonText: {
        fontSize: 25,
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
        width: '25%',
        height: '10%',
        marginTop: '25%',
    },
    textContainer: {
        width: '80%',
        height: '10%',
        marginBottom: '20%',
    },
    background: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
})