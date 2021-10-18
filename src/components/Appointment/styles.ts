/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
    },

    content: {
        flex: 1,
    },

    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    title: {
        color: theme.color.heading,
        fontSize: 18,

    },
    category: {
        color: theme.color.heading,
        fontSize: 13,
        marginRight: 24,
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    playersInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    date: {
        color: theme.color.heading,
        fontSize: 13,
        marginLeft: 7,
    },
    player: {
        fontSize: 13,
        marginLeft: 7,
        marginRight: 24,
    },
});