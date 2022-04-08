import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '96%',
        left: "2%",
        flexDirection: 'column',
        marginTop: '2%',
        marginBottom: '0%',
        borderRadius: 20,
    },
    title: {
        width: '100%',
        height: '40%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '3%',
    },
    titleText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    start: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtitle: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        marginTop: '-2%',
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
        height: '30%',
        flexDirection: 'row',
        flex: 1, 
        marginBottom: '3%',
        paddingRight: '5%',
        paddingLeft: '6%',
    },
    boxText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#EF5230',
        fontSize: 14,
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
    }
})