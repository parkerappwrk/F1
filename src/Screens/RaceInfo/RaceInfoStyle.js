import { StyleSheet } from "react-native";

export default StyleSheet.create({
    detailScreen: {
        backgroundColor: '#000',
        overflowY: 'auto'
    },
    headerRow: {
        flexDirection: 'row',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
    backBtn: {
        height: 40,
        width: 40,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#222',
    },
    backImage: {
        height: 20,
        width: 20,
        objectFit: 'contain'
    },
    routeName: {
        color: '#FFF',
        padding: 20,
    },
    rightImageLogo: {
        height: 40,
        width: 60,
        objectFit: 'contain'
    },
    circuitBanner: {
        padding: 5,
        width: '100%',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    },
    raceCircuitName: {
        fontFamily: 'Formula1-Regular',
        fontSize: 14,
        color: '#FFF',
        letterSpacing: 1,
        textAlign: 'center'
    },
    raceCircuitFlag: {
        width: '100%',
        height: 350,
        objectFit: 'contain',
    },
    circuitNameInfo: {
        marginTop: 30,
        flexDirection: 'row',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    raceCountryFlag: {
        height: 40,
        width: 50,
        objectFit: 'contain'
    },
    circuitCountry: {
        display: 'inline-flex',
        flexDirection: 'column',
    },
    contryName: {
        fontFamily: 'Formula1-Regular',
        fontSize: 14,
        color: '#FFF'
    },
    raceName: {
        fontFamily: 'Formula1-Bold',
        fontSize: 20,
        color: '#FFF'
    },
    circuitRaceInfo: {
        padding: 10,
        flexDirection: 'row',
        width: '100%',
        marginTop: 30,
    },
    circuitRaceInnner: {
        width: '100%',
        display: 'inline-flex',
        borderLeftColor: '#FF1E00',
        borderTopColor: '#FF1E00',
        borderTopWidth: 4,
        borderLeftWidth: 4,
        borderTopLeftRadius: 20,
        padding: 15,
    },
    RaceSchudleBox: {
        padding: 5,
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    },
    'RaceSchudleBox:last-child': {
        borderBottomWidth: 0
    },
    schduleTitle: {
        fontFamily: 'Formula1-Bold',
        fontSize: 18,
        letterSpacing: 2,
        color: '#FFF'
    },
    raceTime: {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginTop: 5
    },
    raceDateTime: {
        fontFamily: 'Formula1-Regular',
        fontSize: 14,
        color: '#FFF'
    }
});