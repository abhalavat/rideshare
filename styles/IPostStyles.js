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
    commentContainer: {
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: '2%',
        paddingTop: '2%',
    }, 
    post: {
        borderRadius: 15,
        paddingBottom: 20,
        backgroundColor: "#EF5230",
        marginBottom: 15,
    },
    postContent: {
        color: 'white',
        textAlign: 'center',
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingBottom: '0%',
        marginTop: -5,
    },
    driver: {
        marginTop: 10,
        fontSize: 16,
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
        backgroundColor: "#FFF2F2",
        borderRadius: 15,
        borderColor: '#EF5230',
        borderWidth: 1,
        width: '75%',
    },
    submit: {
        borderRadius: 15,
        borderColor: '#EF5230',
        borderWidth: 1,
        width: '20%',
        marginLeft: '2%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF2F2',
    }
})