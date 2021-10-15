/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({

    container: {
        width: '80%',
        height: 56,
        backgroundColor: theme.color.primary,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 4,
        shadow: 5,
        shadowColor: "#FFFF"
    },

    title: {
        flex: 1,
        color: theme.color.heading,
        fontSize: 15,
        textAlign: 'center'
    },
    
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme.color.line
    }

});