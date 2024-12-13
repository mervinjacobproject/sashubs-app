import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const SearchBar = ({ placeholder = "Search...", onSearch }: any) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchPress = () => {
    if (onSearch) onSearch(searchText); // Trigger search action when button is pressed
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={searchText}
        onChangeText={setSearchText}
        clearButtonMode="always"
      />
      <TouchableOpacity style={styles.button} onPress={handleSearchPress}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: "#ffff",
    fontSize: 16,
  },
});

export default SearchBar;
