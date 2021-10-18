/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
    },
    user: {
        flexDirection: 'row',
    },
    greeting: {
        fontSize: 24,
        color: theme.color.heading,
        marginRight: 6,
    },
    username: {
        fontSize: 24,
        color: theme.color.heading,
    },
    message: {
        fontSize: 16,
        fontWeight: '300',
        color: theme.color.heading,
    },
});