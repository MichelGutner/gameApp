/* eslint-disable prettier/prettier */
import React from "react";
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { theme } from "../../global/styles/themes";
import { styles } from "./styles";

export function ButtonAdd({...rest}: RectButtonProps) {
    return (
        <RectButton style={styles.container}
        {...rest}
        >
            <FontAwesome
            name='plus'
            color={theme.color.heading}
            size={24}
             />
        </RectButton>
    );
}