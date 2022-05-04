import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '96%',
        left: "2%",
        flexDirection: 'column',
        marginTop: 10,
        borderRadius: 20,
        flex: 1,
        borderColor: '#EF5230',
        borderWidth: 1,
    },
    title: {
        width: '100%',
        height: '40%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 18,
    },
    titleText: {
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
    },
    start: {
        width: '100%',
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtitle: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        fontFamily: 'ArialRoundedMTBold',
    },
    outline: {
        textShadowColor: 'black',
        textShadowRadius: 5,
    },
    box: {
        borderRadius: 50,
        backgroundColor: '#FFF2F2',
        flex: 3,
        margin: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '2%',
        paddingBottom: '2%',
    },
    imgContainer: {
        flex: 1,
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    body: {
        width: '100%',
        flexDirection: 'row',
        flex: 1, 
        marginBottom: 18,
        paddingRight: '5%',
        paddingLeft: '6%',
    },
    boxText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#EF5230',
        fontSize: 18,
        flex: 1,
        marginLeft: '-20%',
    },
    rightBox: {
        flex: 5,
    },
    rightImgContainer: {
        flex: 1,
    },
    rightText: {
        flex: 2,
        marginLeft: '-15%',
    },
    leftText: {
        marginLeft: '-30%',
    },
    background: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 20,
        overflow: 'hidden',
        opacity: 1,
    }
})