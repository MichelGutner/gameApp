/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({

    container: {
        width: 104,
        height: 100,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4,
    },
    content: {
        width: 104,
        height: 100,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: theme.color.background, opacity: 0.9,
        borderColor: '#FFFF',
        borderWidth: 0.6,
    },
    title: {
        color: theme.color.heading,
        fontSize: 15,
    },
    check:{
        position: 'absolute',
        right: 7,
        top: 7,
        width: 12,
        height: 12,
        backgroundColor: theme.color.heading, opacity: 0.3,
        borderRadius: 3,
    },
    checked: {
        position: 'absolute',
        right: 7,
        top: 7,
        width: 12,
        height: 12,
        backgroundColor: theme.color.primary,
        borderRadius: 3,
    },
});