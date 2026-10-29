import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [age, setAge] = useState(0);
  const lowerLimit = age > 0 ? (220 - age) * 0.65 : 0;
  const upperLimit = age > 0 ? (220 - age) * 0.85 : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <Text style={styles.label}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="number-pad"
      />

      <Text style={styles.label}>Lower limit: {lowerLimit.toFixed(2)}</Text>
      <Text style={styles.label}>Upper limit: {upperLimit.toFixed(2)}</Text>
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
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
  },
  label: {
    padding: 10,
    margin: 10,
  },

  input: {
    width: 200,
    height: 50,

    borderWidth: 1,
    borderColor: "#202020",
    borderRadius: 10,

    textAlign: "center",
    padding: 10,
    margin: 5,
  },
});
