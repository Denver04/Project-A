import { Link } from "expo-router";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Main() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>REMIX</Text>
            <Text style={styles.subtitle}>Welcome, Player!</Text>
            
            <Link href="/auth/login" style={styles.button} asChild>
                <Pressable>
                    <Text style={styles.buttonText}>Enter Game</Text>
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
        padding: 24,
    },
    title: {
        fontSize: 44,
        fontWeight: "700",
        color: "#e0e0e0",
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "500",
        color: "#b0b0b0",
        marginBottom: 40,
    },
    button: {
        paddingHorizontal: 32,
        paddingVertical: 14,
        backgroundColor: "#4db8ff",
        borderWidth: 0,
        borderRadius: 6,
    },
    buttonText: {
        color: "#121212",
        fontSize: 16,
        fontWeight: "700",
    },
});
