/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
     background:{
          width: '100%',
          height: '100%',
          backgroundColor: theme.color.background
     },

     header: {
          width: '100%',
          paddingHorizontal: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: getStatusBarHeight() + 26,
          marginBottom: 42
     },

     content:{
          marginTop: 42,
     },
    matches: {
        marginTop: 24,
        marginLeft: 24,
}
});