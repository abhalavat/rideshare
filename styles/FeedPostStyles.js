import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '96%',
        left: "2%",
        flexDirection: 'column',
        marginTop: '2%',
        marginBottom: '2%',
        borderRadius: 15,
    },
    title: {
        width: '100%',
        height: '40%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingBottom: '1.5%',
        paddingTop: '1.5%',
    },
    body: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        flex: 2, 
    },
    left: {
        width: '50%',
        flex: 1,
        flexDirection: 'column',
        paddingBottom: '4%',
    },
    leftLayer: {
        flexDirection: 'row',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingBottom: '1%',
        paddingTop: '1%',
    },
    leftText: {
        color: 'white',
        flex: 5,
        marginLeft: '5%',
        fontSize: 20,
    },
    leftImg: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    right: {
        width: '50%',
        flex: 1,
        paddingTop: '3%',
        paddingBottom: '3%',
        flexDirection: 'column',
    },
    rightText: {
        color: 'white',
        fontSize: 15,
    },
})