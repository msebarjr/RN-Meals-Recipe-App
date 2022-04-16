import { StyleSheet, FlatList, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsScreen = ({ route }) => {
    const { categoryId } = route.params;

    const filteredMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(categoryId) >= 0
    );

    function renderMealItem(itemData) {
        return <MealItem title={itemData.item.title} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
};

export default MealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
