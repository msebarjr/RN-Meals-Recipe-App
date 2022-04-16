import { FlatList, Text, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(itemData) {
    return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
        />
    );
}

export default function CategoryScreen() {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({});