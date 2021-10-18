/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 1,
        backgroundColor: theme.color.secondary, opacity: 0.1,
        marginTop: 1,
        marginVertical: 21,
        alignSelf: 'flex-end',
    },
})