/* eslint-disable prettier/prettier */
import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
    const uri = 'https://img.ibxk.com.br/2019/07/26/26171514413327.jpg';
    return (
        <Image
            source = {{uri}}
            style={styles.image}
            resizeMode='cover'
        />
    );
}