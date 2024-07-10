import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    fullScreen: {
        backgroundColor: '#000'
    },
    centerImageLogo: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        margin: 'auto'
    },
    centerLogoBox: {
        display: 'inline-flex',
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15
    },
    centerCarBox: {
        display: 'inline-flex',
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0
    },
    fullCarImage: {
        width: '100%',
        resizeMode: 'cover',
        margin: 'auto',
        height: 320
    },
    TagLine: {
        fontSize: 30,
        lineHeight: 40,
        color: '#EEE',
        textAlign: 'center',
        fontFamily: 'Formula1-Bold',
        marginTop: 10,
    },
    SubTagLine: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 1,
        color: '#FFD428',
        textAlign: 'center',
        fontFamily: 'Formula1-Regular',
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    MainButtonRow: {
        display: 'inline-flex',
        width: '100%',
        justifyContent: 'flex-end'
    },
    TouchMainButton: {
        height: 70,
        width: 70,
        borderCurve: 'circular',
        marginLeft: 'auto',
        marginTop: 20,
        marginRight: 10,
        borderRadius: 35,
    },
    MainButton: {
        backgroundColor: '#EECECC',
        color: '#FFF',
        borderCurve: 'circular',
        height: 70,
        width: 70,
        borderRadius: 35,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#EECECC',
        shadowRadius: 35,
        shadowOpacity: 0.50,
        shadowOffset: {
            width: 30,
            height: -30,
        },
    },
    startBtnImg: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    }
});