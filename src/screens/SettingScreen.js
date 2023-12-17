import { StyleSheet, Text, View, Button } from "react-native";

export default function SettingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
