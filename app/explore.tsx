import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Explore() { return <SafeAreaView style={styles.safe}><View style={styles.container}><Text style={styles.title}>Explore homes</Text><Text style={styles.body}>Search and listing detail screens will connect to the shared API in the mobile phase.</Text></View></SafeAreaView>; }
const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: "#f9f8f4" }, container: { padding: 28 }, title: { color: "#123b38", fontSize: 34, fontWeight: "700" }, body: { color: "#70807c", lineHeight: 24, fontSize: 16, marginTop: 14 } });
