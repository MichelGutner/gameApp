/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({

    container: {
        width: 48,
        height: 48,
        backgroundColor: theme.color.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});