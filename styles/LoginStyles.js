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
    }
})