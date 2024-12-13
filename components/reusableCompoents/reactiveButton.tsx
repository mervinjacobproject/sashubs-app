import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ReactiveButton = ({ title, onPress }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007BFF", // Button color
    paddingVertical: 12, // Vertical padding
    paddingHorizontal: 24, // Horizontal padding
    borderRadius: 8, // Rounded corners
    elevation: 3, // Shadow on Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    color: "#FFFFFF",
  },
  buttonText: {
    backgroundColor: "#007BFF",
    color: "#FFFFFF", // Text color
    fontSize: 16, // Text size
    fontWeight: "bold", // Text weight
    textAlign: "center", // Center text
  },
});

export default ReactiveButton;
