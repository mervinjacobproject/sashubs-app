import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CommonDataContext from "../../components/contexts/commonDataContext";
import { useRouter } from "expo-router";

export default function CreateAccountScreen() {
  const { fetchCreateUser } = useContext(CommonDataContext);
  const router = useRouter();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    // <KeyboardAvoidingView
    //   style={styles.container}
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   keyboardVerticalOffset={100} // Adjust based on header height if any
    // >
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Text style={styles.title}>Create account</Text>
      <Text style={styles.subtitle}>Fill your information below</Text>

      {/* Name Field */}
      <View style={styles.inputContainer}>
        <Icon
          name="person-outline"
          size={20}
          color="#007AFF"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Phone Number Field */}
      <View style={styles.inputContainer}>
        <Icon
          name="call-outline"
          size={20}
          color="#007AFF"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone No"
          value={dob}
          onChangeText={setDob}
        />
      </View>

      {/* Email Field */}
      <View style={styles.inputContainer}>
        <Icon
          name="mail-outline"
          size={20}
          color="#007AFF"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Password Field */}
      <View style={styles.inputContainer}>
        <Icon
          name="lock-closed-outline"
          size={20}
          color="#007AFF"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#007AFF"
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Field */}
      <View style={styles.inputContainer}>
        <Icon
          name="lock-closed-outline"
          size={20}
          color="#007AFF"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Icon
            name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#007AFF"
          />
        </TouchableOpacity>
      </View>

      {/* Terms and Conditions Checkbox */}
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Agree with terms & condition</Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => fetchCreateUser(name, email, confirmPassword, dob)}
      >
        <Text style={styles.signupButtonText}>Sign up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.link}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
    paddingTop: 130,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 18,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxLabel: {
    fontSize: 14,
    color: "#666",
  },
  signupButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  link: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});
