import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#F3EDFF',
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
    },
    name: {
        flex: 12,
    },
    comment: {
        paddingLeft: '1.5%',
    }
})