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
        flexDirection: 'column',
    },
    subtitle: {
        color: '#EF5230',
        marginTop: '2%',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50,
        paddingLeft: '2%',
        height: '4%',
    },
    description: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50,
        padding: '2%',
        paddingTop: '2%',
    },
    dropdown: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50,
    },
    options: {
        width: '100%',
        borderRadius: 50,
    },
    picker: {
        height: 50,
    },
    pick: {
        height: 10,
    },
    submit: {
        borderRadius: 15,
        borderColor: '#EF5230',
        borderWidth: 1,
        padding: '2%',
        marginTop: '5%',
        width: '40%',
        left: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF2F2',
    },
    submitText: {
        fontSize: 20,

    }
})