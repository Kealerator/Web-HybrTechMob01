import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [age, setAge] = useState("");

  const numericAge = Number(age);
  const lowerLimit = numericAge > 0 ? (220 - numericAge) * 0.65 : 0;
  const upperLimit = numericAge > 0 ? (220 - numericAge) * 0.85 : 0;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={styles.heart}>Heart</Text> Rate Limits Calculator
        </Text>
      </View>

	  <View style={styles.form}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
//    backgroundColor: "#fe7676",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
	textShadowColor: "black",
	textShadowOffset: {
		width: 1,
		height: 1,
	},
	
    fontWeight: "bold",
    textAlign: "left",
    margin: 70,
  },
  heart: {
    color: "#fe3030",
  },
  label: {
    fontSize: 16,
    padding: 10,
    margin: 10,
  },
  form: {
	  alignItems: "center",
  },

  input: {
    width: 200,
    height: 50,

    borderWidth: 1,
    borderColor: "#202020",
    borderRadius: 20,
    backgroundColor: "#fbdbdb",

    shadowColor: "black",

    elevation: 5,

    textAlign: "center",
    padding: 10,
    margin: 10,
    marginBottom: 45,
  },
});
