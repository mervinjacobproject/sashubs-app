import React, { useEffect, useState } from "react";
import CartContext from ".";
import ApiClient from "@/apiClient/apiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
// import { useNavigation } from "@react-navigation/native";

const CommonDataProvider = (props) => {
  const router = useRouter();
  // const navigation = useNavigation();
  const [userlogin, setuserlogin] = useState(false);
  const [getUserList, setUserList] = useState([]);
  const [getParentCategoryList, setParentCategoryList] = useState([]);

  //User login
  const fetchUserLogin = async (Email, Password) => {
    const payload = { email: Email, password: Password };
    try {
      const response = await ApiClient.post("api/auth/login", payload);
      console.log(response.data.userData);
      await AsyncStorage.setItem("userToken", response.data.idToken);
      await AsyncStorage.setItem(
        "userInfo",
        JSON.stringify(response.data.userData)
      );

      router.replace("/(tabs)/home");
    } catch (err) {
      console.log(err.message);
    } finally {
      // setLoading(false);
    }
  };

  //Clear the all AsyncStorage Data
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      router.push("/(auth)/login");
      console.log("All data has been cleared from AsyncStorage.");
    } catch (e) {
      console.error("Error clearing AsyncStorage", e);
    }
  };

  //Create Users
  const fetchCreateUser = async (UserName, Email, Password, PhoneNo) => {
    let ip = 0;
    await fetch("https://api64.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        ip = data.ip;
      })
      .catch((error) => console.error("Error:", error));
    const payload = {
      UserName: UserName,
      Email: Email,
      Password: Password,
      PhoneNo: Number(PhoneNo),
      IpAddress: ip,
      Status: true,
    };
    console.log(payload);
    try {
      const response = await ApiClient.post("api/createuser", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data, "value");
      router.push("/(auth)/login");
    } catch (err) {
      console.log(err.message);
    } finally {
      // setLoading(false);
    }
  };

  //GET ALL USERS DATA LIST
  const fetchUserList = async () => {
    try {
      const response = await ApiClient("api/usersread", payload);
      setUserList(response.data);
    } catch (err) {
      console.log(err.message);
    } finally {
      // setLoading(false);
    }
  };

  //GET Parent Category DATA LIST
  const fetchParentCategoryList = async () => {
    try {
      const response = await ApiClient("api/parentcategoryread");
      setParentCategoryList(response.data);
    } catch (err) {
      console.log(err.message);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...props,
        fetchUserList,
        getUserList,
        fetchParentCategoryList,
        getParentCategoryList,
        fetchUserLogin,
        userlogin,
        setuserlogin,
        clearStorage,
        fetchCreateUser,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CommonDataProvider;
