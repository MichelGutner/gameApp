/* eslint-disable prettier/prettier */

import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Appointment } from "../../components/Appointment";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/listDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/profile";
import { styles } from './styles';

export default function Home() {
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },

        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },

    ]


    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }


    return (
        <View style={styles.background}>

            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <CategorySelect
                categoryslected={category}
                setCategory={handleCategorySelect}
            />
            <View style={styles.content}>
                <ListHeader
                    title={"Partidas Agendadas"}
                    subtitle={"Total 6"}
                />

                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}
