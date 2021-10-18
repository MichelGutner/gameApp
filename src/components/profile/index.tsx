/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "../avatar";
import { styles } from "./styles";

export function Profile() {
    return (
        <View style={styles.container}>

            <Avatar urlImage="https://avatars.githubusercontent.com/u/61032237?v=4" />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        Michel
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje e dia de Vitoria
                </Text>
            </View>
        </View>
    );
}