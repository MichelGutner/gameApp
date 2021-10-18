/* eslint-disable prettier/prettier */
import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import { Categories } from "../../utils/categories";
import { Category } from "../Category";


type Props = {
    categoryslected: string;
    setCategory: (categoryId: string) => void;
    hasCheckedBox?: boolean;
}

export function CategorySelect({
    categoryslected,
    setCategory,
    hasCheckedBox = false,
}: Props) {

    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle = {{paddingRight: 10}}
        >
        {
            Categories.map(category => (
                <Category
                key={category.id}
                title={category.title}
                icon={category.icon}
                checked={category.id === categoryslected}
                onPress={() => setCategory(category.id)}
                hasCheckedBox={hasCheckedBox}
                />
            ))
        }
        </ScrollView>
        );
}