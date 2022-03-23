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
        width: '100%',
        left: '0%',
        justifyContent: 'center',
        marginBottom: '5%',
        flexDirection: 'row',
    },
    input: {
        paddingTop: 7,
        paddingLeft: 10,
        paddingBottom: 7,
        paddingRight: 10,
        backgroundColor: "#F9F9F9",
        borderRadius: 15,
        borderColor: '#DAC5FF',
        borderWidth: 1,
        width: '75%',
    },
    submit: {
        borderRadius: 15,
        borderColor: '#DAC5FF',
        borderWidth: 1,
        width: '20%',
        marginLeft: '2%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3EDFF',
    }
})