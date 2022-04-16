import { StyleSheet, Text, View, Pressable, Platform } from "react-native";

export default function CategoryGridTile({ title, color }) {
    return (
        <View style={[styles.tile, { backgroundColor: color }]}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressedIOS : null,
                ]}
                android_ripple={{ color: "#ccc" }}
            >
                <View style={styles.titleWrapper}>
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
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
});
