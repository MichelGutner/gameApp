/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import React from "react";
import {
Text,
View,
Image,
TouchableOpacity,
Alert
} from "react-native";

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = {
    title?: String;
    navigation?: any;
}

export function ButtonIcon({title, navigation}: Props) {
    console.log(title, navigation)
    return (
        <TouchableOpacity
         style={styles.container}
         onPress = {() =>{
             navigation.navigate('Home')
         }}
         >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
