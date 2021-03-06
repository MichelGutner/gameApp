/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */


import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, View } from "react-native";

import { styles } from "./styles";
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg'

import { GuildIcon } from "../GuildIcon";
import { Categories } from "../../utils/categories";
import { theme } from "../../global/styles/themes";


export type GuildProps = {
    id: string;
    name: string;
    icon: null;
    owner: boolean;
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentProps;
}

export function Appointment({ data, ...rest }: Props) {
    const [category] = Categories.filter(item => item.id === data.category);
    const { owner } = data.guild;
    const { primary, on } = theme.color;

    return (
        <RectButton {...rest}>
            <View style={styles.container}>
                <GuildIcon />
                    <View style={styles.content}>
                        <View style={styles.header}>
                            <Text style={styles.title}>
                                {data.guild.name}
                            </Text>

                            <Text style={styles.category}>
                                {category.title}
                            </Text>
                        </View>

                        <View style={styles.footer}>
                            <View style={styles.dateInfo}>
                                <CalendarSvg />

                                <Text style={styles.date}>
                                    {data.date}
                                </Text>
                            </View>

                            <View style={styles.playersInfo}>
                                <PlayerSvg fill={owner ? primary : on} />

                                <Text style={[
                                    styles.player, { color: owner ? primary : on }
                                ]}>
                                    {owner ? 'Leader' : 'Membro'}
                                </Text>
                            </View>
                        </View>
                    </View>
            </View>
        </RectButton>
    );
}