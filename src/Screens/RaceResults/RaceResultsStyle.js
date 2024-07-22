import { StyleSheet } from "react-native";

export default StyleSheet.create({
    detailScreen: {
        flex: 1,
        backgroundColor: '#000'
    },
    headerRow: {
        flexDirection: 'column',
        display: 'inline-flex',
        backgroundColor: '#FF1E00',
    },
    headerNavRow: {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingLeft: 10,
        paddingBottom: 15,
        paddingTop: 15,
        paddingRight: 10,
    },
    backBtn: {
        height: 30,
        width: 40,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backImage: {
        height: 20,
        width: 20,
        objectFit: 'contain'
    },
    raceCircuitName: {
        fontSize: 22,
        fontFamily: 'Formula1-Bold',
        color: '#FFF',
        textTransform: 'uppercase',
        paddingRight: 10,
        flex: 1,
        display: 'inline-block',
    },
    headerTabRow: {
        display: 'inline-flex',
        flexDirection: 'row',
        paddingTop: 12,
        paddingBottom: 20,
    },
    pos: {
        display: 'inline-flex',
        flex: 1,
        fontFamily: 'Formula1-Bold',
        fontSize: 12,
        color: '#EEE',
        justifyContent: 'center',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    driveName: {
        display: 'inline-flex',
        flex: 3,
        fontFamily: 'Formula1-Bold',
        fontSize: 12,
        color: '#EEE',
        textTransform: 'uppercase',
    },
    time: {
        display: 'inline-flex',
        flex: 2,
        fontFamily: 'Formula1-Bold',
        fontSize: 12,
        color: '#EEE',
        textTransform: 'uppercase',
    },
    driverDetailRow: {
        display: 'inline-flex',
        flexDirection: 'column',
        paddingBottom: 100,
    },
    driverPosRow: {
        display: 'inline-flex',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#111',
        paddingBottom: 20,
        paddingTop: 20,
    },
    driverPos: {
        display: 'inline-flex',
        flex: 1,
        fontFamily: 'Formula1-Bold',
        fontSize: 14,
        color: '#FFF',
        justifyContent: 'center',
        textAlign: 'center',
    },
    driverFullName: {
        display: 'inline-flex',
        flex: 3,
        fontFamily: 'Formula1-Bold',
        fontSize: 14,
        color: '#FFF',
    },
    totalTime: {
        display: 'inline-flex',
        flex: 2,
        fontFamily: 'Formula1-Bold',
        fontSize: 14,
        color: '#FFF',
    }
});