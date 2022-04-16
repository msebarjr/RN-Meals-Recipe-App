import { FlatList, Text, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

export default function CategoryScreen({ navigation }) {
    function selectCategoryHandler(navigation, id) {
        navigation.navigate("Meals", { categoryId: id });
    }

    function renderCategoryItem(itemData) {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={selectCategoryHandler.bind(
                    this,
                    navigation,
                    itemData.item.id
                )}
            />
        );
    }

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
