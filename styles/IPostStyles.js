import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        marginTop: '8%',
        height: '85%',
    },
    post: {
        borderRadius: 15,
        paddingBottom: '10%',
        backgroundColor: "#E7DAFF",
        marginBottom: '2%',
    },
    postContent: {
        color: 'white',
        textAlign: 'center',
        paddingLeft: '3%',
        paddingRight: '3%',
    },
    addComment: {
        backgroundColor: "#F9F9F9",
        width: '98%',
        left: '1%',
        borderRadius: 15,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingTop: 7,
        paddingBottom: 7,
        borderColor: '#DAC5FF',
        borderWidth: 1,
    },
})