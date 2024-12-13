import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  // CheckBox,
} from "react-native";
import CommonDataContext from "../../components/contexts/commonDataContext";

export default function LoginScreen() {
  const { fetchUserLogin } = useContext(CommonDataContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    await fetchUserLogin(email, password);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../../assets/images/Logo.png")}
        style={styles.logo}
      />

      {/* Welcome Text */}
      <Text style={styles.title}>Welcome back!</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text style={styles.showPasswordText}>
            {showPassword ? "Hide" : "Show"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Remember Me and Forgot Password */}
      <View style={styles.optionsContainer}>
        <View style={styles.rememberMeContainer}>
          {/* <CheckBox
            value={rememberMe}
            onValueChange={setRememberMe}
            tintColors={{ true: "#1E90FF", false: "#888" }}
          /> */}
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => handleLogin()}
      >
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>

      {/* Create Account Link */}
      <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
        <Text style={styles.createAccountText}>Don't have an account yet?</Text>
        <Text style={styles.createAccountButtonText}>Create account</Text>
      </TouchableOpacity>

      {/* Terms and Conditions */}
      <Text style={styles.termsText}>Terms and conditions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 25,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    color: "#333",
  },
  showPasswordButton: {
    paddingHorizontal: 5,
  },
  showPasswordText: {
    color: "#1E90FF",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberMeText: {
    color: "#333",
    marginLeft: 8,
  },
  forgotPasswordText: {
    color: "#1E90FF",
  },
  signInButton: {
    backgroundColor: "#1E90FF",
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  createAccountText: {
    textAlign: "center",
    color: "#888",
    fontSize: 14,
  },
  createAccountButtonText: {
    color: "#1E90FF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  termsText: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 12,
    marginTop: 20,
  },
});
