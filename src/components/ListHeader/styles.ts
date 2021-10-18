/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    title: {
        color: theme.color.heading,
        fontSize: 18,
    },
    subtitle: {
        color: theme.color.heading,
        fontSize: 13,
    }
});