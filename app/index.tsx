import { Link } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function MobileHome() {
  return <SafeAreaView style={styles.safe}><View style={styles.container}><Text style={styles.eyebrow}>YADANAR</Text><Text style={styles.title}>A better way home.</Text><Text style={styles.body}>The mobile experience is prepared for the next phase. Browse, save, and inquire about beautiful places across Myanmar.</Text><Link href="/explore" style={styles.button}>Explore homes →</Link></View></SafeAreaView>;
}
const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: "#f9f8f4" }, container: { flex: 1, justifyContent: "center", padding: 28 }, eyebrow: { color: "#df7859", fontWeight: "700", letterSpacing: 2, fontSize: 12 }, title: { color: "#123b38", fontSize: 44, fontWeight: "700", marginTop: 12 }, body: { color: "#70807c", lineHeight: 24, fontSize: 16, marginTop: 18, maxWidth: 360 }, button: { marginTop: 30, padding: 16, borderRadius: 30, backgroundColor: "#123b38", color: "#fff", textAlign: "center", fontWeight: "700" } });
