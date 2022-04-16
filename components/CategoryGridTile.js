import { StyleSheet, Text, View, Pressable, Platform } from "react-native";

export default function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={styles.tile}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressedIOS : null,
                ]}
                android_ripple={{ color: "#ccc" }}
                onPress={onPress}
            >
                <View style={[styles.titleWrapper, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    tile: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 2,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    button: {
        flex: 1,
    },
    buttonPressedIOS: {
        opacity: 0.25,
    },
    titleWrapper: {
        flex: 1,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
});
