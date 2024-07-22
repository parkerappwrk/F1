import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    fullScreen: {
        backgroundColor: '#FFF'
    },
    headerRow: {
        backgroundColor: '#FF1E00',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    sectionTitle: {
        fontSize: 25,
        fontFamily: 'Formula1-Bold',
        color: '#FFF',
        textTransform: 'uppercase'
    },
    tabColumView: {
        paddingBottom: 50,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        backgroundColor: '#000',
        flex: 1,
        display: 'inline-flex',
    },
    driverRow: {
        borderRadius: 10,
        marginBottom: 20,
        display: 'inline-flex',
        flexDirection: 'column',
        backgroundColor: '#FFF',
        padding: 15,
    },
    driverInnerBox: {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    driverInfoBox: {
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 3
    },
    driverImageBox: {
        display: 'inline-flex',
        flexDirection: 'column',
        flex: 1,
    },
    driverImg: {
        width: '100%',
        objectFit: 'contain',
        height: 100
    },
    constructorCarImg: {
        width: '100%',
        objectFit: 'contain',
        height: 60
    },
    driverPointBox: {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginBottom: 10,
        gap: 5
    },
    driverPosition: {
        fontFamily: 'Formula1-Black',
        fontSize: 40,
        color: '#000',
        marginBottom: 5
    },
    driverNameBox: {
        paddingLeft: 10,
        borderLeftWidth: 5,
        borderStyle: 'solid',
        display: 'inline-flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 5,
    },
    constructorNameBox: {
        paddingLeft: 10,
        borderLeftWidth: 5,
        borderStyle: 'solid',
        display: 'inline-flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    driverName: {
        fontFamily: 'Formula1-Regular',
        fontSize: 18,
        color: '#000',
        display: 'inline-block',
    },
    constructorName: {
        fontFamily: 'Formula1-Regular',
        fontSize: 18,
        color: '#000',
        display: 'inline-block',
        marginBottom: 0,
    },
    familyName: {
        fontFamily: 'Formula1-Wide',
        textTransform: 'uppercase',
        fontSize: 13,
        color: '#000',
        marginBottom: 10
    },
    driverPoints: {
        fontFamily: 'Formula1-Bold',
        fontSize: 18,
        letterSpacing: 2,
        textAlign: 'center',
        color: '#000',
    },
    pointsBox: {
        fontFamily: 'Formula1-Regular',
        fontSize: 12,
        color: '#FFF',
        backgroundColor: '#000',
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 2,
        paddingRight: 2,
        letterSpacing: 1,
        textAlign: 'center',
        display: 'inline-flex',
        textTransform: 'uppercase',
        borderRadius: 2,
    },
    constructorBox: {
        borderTopWidth: 1,
        paddingTop: 10,
        borderColor: '#B9B9BC',
        borderStyle: 'solid',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'inline-flex',
        justifyContent: 'space-between'
    },
    constructorDriverBox: {
        borderTopWidth: 1,
        paddingTop: 10,
        borderColor: '#B9B9BC',
        borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        display: 'inline-flex',
    },
    constructorName: {
        fontFamily: 'Formula1-Bold',
        fontSize: 20,
        color: '#000',
        display: 'inline-flex',
        textAlign: 'left',
        justifyContent: 'flex-start',
        flex: 2
    },
    constructorImgBox: {
        display: 'inline-flex',
        textAlign: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
        marginRight: 10,
    },
    constructorImg: {
        height: 30,
        width: 30,
        objectFit: 'contain',
        margin: 'auto'
    },
    constructorDriver: {
        fontFamily: 'Formula1-Regular',
        color: '#000',
        fontSize: 12,
    },
    raceRowContainer: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',
        marginBottom: 20,
    },
    raceLocationRow: {
        display: 'inline-flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
    },
    raceWinnerRow: {
        display: 'inline-flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    raceCountryFlag: {
        height: 40,
        width: 50,
        objectFit: 'contain',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#DDD',
    },
    contryName: {
        fontFamily: 'Formula1-Wide',
        fontSize: 14,
        color: '#000',
    },
    racePodiumBox: {
        flexDirection: 'column',
        flex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    driverFirst: {
        width: '100%',
        objectFit: 'contain',
        height: 90,
    },
    driverOther: {
        width: '100%',
        objectFit: 'contain',
        height: 70,
        marginTop: 20,
    },
    raceName: {
        fontFamily: 'Formula1-Bold',
        fontSize: 20,
        color: '#000',
        display: 'inline-block',
        marginBottom: 10,
    },
    winnername: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Formula1-Bold',
        paddingLeft: 10,
        borderLeftWidth: 5,
        borderStyle: 'solid',
        display: 'inline-flex',
        flex: 1,
        marginTop: 5,
    }
});