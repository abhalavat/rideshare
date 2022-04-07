import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderRadius: 10,
        marginBottom: '2%',
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: '1%',
        marginTop: '2%',
    },
    bottom: {
        flex: 1,
        marginBottom: '2%',
    },
    img: {
        resizeMode: 'contain',
        flex: 1,
        width: '100%',
        height: '100%',
        paddingLeft: '1%',
    },
    name: {
        flex: 9,
    },
    time: {
        flex: 3,
        paddingRight: '3%',
        textAlign: 'right',
    },
    comment: {
        paddingLeft: '1.5%',
        paddingRight: '1.5%',
    }
})