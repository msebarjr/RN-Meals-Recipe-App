import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoryScreen from "./screens/CategoryScreen";
import MealsScreen from "./screens/MealsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="All Categories">
                    <Stack.Screen
                        name="All Categories"
                        component={CategoryScreen}
                    />
                    <Stack.Screen name="Meals" component={MealsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});
