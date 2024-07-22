import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fullScreen: {
        backgroundColor: '#000',
        flex: 1
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
    allContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 30,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    newsBlock: {
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
        borderLeftColor: '#FF1E00',
        borderTopColor: '#FF1E00',
        borderTopWidth: 4,
        borderLeftWidth: 4,
        borderTopLeftRadius: 20,
        marginTop: 30
    },
    newsImageBox: {
        height: 200,
        display: 'inline-flex',
        flexDirection: 'row',
        flex: 1,
    },
    newsImageBanner: {
        height: 200,
        width: '100%',
        display: 'inline-flex',
    },
    newsTitle: {
        marginTop: 10,
        display: 'inline-block',
        fontFamily: 'Formula1-Bold',
        fontSize: 20,
        letterSpacing: 1,
        lineHeight: 24,
        color: '#FFF',
    },
    newsDesc: {
        marginTop: 10,
        display: 'inline-block',
        fontFamily: 'Formula1-Regular',
        fontSize: 14,
        letterSpacing: 1,
        lineHeight: 20,
        color: '#FFF',
    },
    newsdate: {
        fontFamily: 'Formula1-Regular',
        fontSize: 10,
        color: '#FFF',
        marginTop: 10
    }
});