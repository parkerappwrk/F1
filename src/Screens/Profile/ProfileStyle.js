import { StyleSheet } from "react-native";

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
    headerTitle: {
        fontSize: 25,
        fontFamily: 'Formula1-Bold',
        color: '#FFF',
        textTransform: 'uppercase'
    },
    sectionBox: {
        padding: 20,
        paddingBottom: 0,
        marginBottom: 20,
        backgroundColor: '#FAFAFA'
    },
    sectionTitle: {
        fontSize: 19,
        fontFamily: 'Formula1-Bold',
        color: '#000',
        display: 'inline-block',
        marginBottom: 10,
    },
    inputBox: {
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#EEE',
        paddingLeft: 5,
        paddingRight: 5,
        display: 'inline-flex',
        flexDirection: 'column',
    },
    inputLabel: {
        fontSize: 16,
        fontFamily: 'Formula1-Bold',
        color: '#000',
    },
    inputValue: {
        fontSize: 12,
        fontFamily: 'Formula1-Regular',
        color: '#555',
        display: 'inline-block',
        lineHeight: 20,
    },
    scrollContainer: {
        display: 'inline-flex',
        flexDirection: 'column',
    },
    cancelSubsBox: {
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#EEE',
        paddingLeft: 5,
        paddingRight: 5,
        display: 'inline-flex',
        flexDirection: 'row',
    },
    cancelSubs: {
        fontSize: 16,
        fontFamily: 'Formula1-Bold',
        color: '#000',
        borderBottomColor: '#FF1E00',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        display: 'inline-flex',
    },
    notificationRow: {
        paddingTop: 15,
        paddingBottom: 15,
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderStyle: 'solid',
        borderTopColor: '#EEE',
    },
    notificationText: {
        fontSize: 16,
        fontFamily: 'Formula1-Bold',
        color: '#000',
    },
    logoutBtn: {
        borderRadius: 4,
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#FAFAFA',
        fontSize: 20,
        fontFamily: 'Formula1-Regular',
        color: '#000',
        letterSpacing: 1,
        display: 'flex',
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        marginBottom: 20,
    }
});