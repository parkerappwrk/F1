import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    fullScreen: {
        backgroundColor: '#000'
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
        flex: 1,
        backgroundColor: '#000',
        paddingBottom: 50,
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },
    raceRowBox: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginBottom: 20,
    },
    raceName: {
        fontFamily: 'Formula1-Bold',
        fontSize: 15,
        marginBottom: 10,
        color: '#000'
    },
    raceCircutName: {
        fontFamily: 'Formula1-Black',
        fontSize: 20,
        color: '#000',
        letterSpacing: 1
    },
    RaceDateBox: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
    },
    raceDate: {
        fontFamily: 'Formula1-Regular',
        color: '#555',
        fontSize: 12,
        display: 'inline-block'
    },
    roundTitle: {
        fontFamily: 'Formula1-Bold',
        fontSize: 18,
        color: '#000',
        display: 'inline-block'
    },
    raceCircuitBox: {
        flex: 1,
        flexShrink: 1
    },
    raceCircuitInfo: {
        flexDirection: "row",
        flex: 1,
        display: 'inline-flex',
        gap: 20
    },
    raceCircuitImg: {
        height: 40,
        marginTop: 10,
        width: 50
    },
    raceCircuitFlag: {
        height: 30,
        objectFit: 'contain',
        width: 50,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#EEE'
    }
});