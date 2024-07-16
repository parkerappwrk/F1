import { StyleSheet } from "react-native";

export default StyleSheet.create({
    detailScreen: {
        flex: 1,
        backgroundColor: '#000'
    },
    headerRow: {
        flexDirection: 'row',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    backBtn: {
        height: 40,
        width: 40,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#999',
    },
    backImage: {
        height: 30,
        width: 30,
        objectFit: 'contain'
    },
    routeName: {
        color: '#FFF',
        padding: 20,
    }
});