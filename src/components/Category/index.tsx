/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Text, View } from "react-native";
import { SvgProps } from 'react-native-svg'
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";
import React from "react";

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckedBox?: boolean;
    checked?: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckedBox = false,
    ...rest }:
    Props) {

    return (
        <RectButton {...rest}>
            <View style={styles.container}>
                <View>
                    <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
                >

                    {
                        hasCheckedBox &&
                        <View style={
                            checked ? styles.checked : styles.check
                        }
                     />
                     }
                    <Icon
                        width={48}
                        height={48}
                    />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    </View>
                </View>
            </View>
        </RectButton>

    );
}