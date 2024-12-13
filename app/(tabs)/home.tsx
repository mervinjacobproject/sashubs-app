import CommonDataContext from "@/components/contexts/commonDataContext";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import React, { useContext, useEffect } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeScreen() {
  const router = useRouter();
  const {
    getUserList,
    userlogin,
    clearStorage,
    getParentCategoryList,
    fetchParentCategoryList,
  } = useContext(CommonDataContext);
  useEffect(() => {
    fetchParentCategoryList();
  }, []);
  console.log(getParentCategoryList);

  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <View style={styles.logocontainer}>
          <TouchableOpacity onPress={() => clearStorage()}>
            <Image
              source={require("../../assets/images/Logo.png")}
              style={styles.logo}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profilecontainer}>
          <Image
            source={require("../../assets/images/profile2.jpg")}
            style={styles.profile}
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={24} color={"#787878"} />
        <Text style={styles.searchText}>Search</Text>
      </View>
      <View style={styles.location}>
        <Ionicons name="location-outline" size={18} color={"#567EDB"} />
        <Text style={styles.locationText}>Madurai</Text>
      </View>
      <Text style={styles.CategoryText}>Categories</Text>
      <ScrollView horizontal={true} style={{ marginLeft: 20, height: 150 }}>
        {getParentCategoryList?.map((v: any) => (
          <View style={styles.scrollCategory}>
            <Text style={{ margin: "auto" }}>
              {v?.Name}
              {/* <Ionicons name="home-outline" size={35} color={'#79797B'} /> */}
            </Text>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.CategoryText}>Categories</Text>
      <ScrollView horizontal={false} style={{ marginLeft: 20 }}>
        <View style={styles.card}>
          <View style={styles.scrolllist}></View>
          <View style={styles.scrolllist}></View>
        </View>
        <View style={styles.card}>
          <View style={styles.scrolllist}></View>
          <View style={styles.scrolllist}></View>
        </View>
        <View style={styles.card}>
          <View style={styles.scrolllist}></View>
          <View style={styles.scrolllist}></View>
        </View>
        <View style={styles.card}>
          <View style={styles.scrolllist}></View>
          <View style={styles.scrolllist}></View>
        </View>
        <View style={styles.card}>
          <View style={styles.scrolllist}></View>
          <View style={styles.scrolllist}></View>
        </View>
        <View style={styles.card}>
          <View style={styles.scrolllist}></View>
          <View style={styles.scrolllist}></View>
        </View>
        <View style={styles.card}>
          <View style={styles.scrolllist}></View>
          <View style={styles.scrolllist}></View>
        </View>
        <View style={styles.card}>
          <View style={styles.scrolllist}></View>
          <View style={styles.scrolllist}></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffff",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
    paddingBottom: 10,
  },
  logocontainer: {
    width: 70,
    height: 70,
  },
  logo: {
    width: 70,
    height: 70,
    objectFit: "contain",
  },
  profilecontainer: {
    width: 70,
    height: 70,
  },
  profile: {
    width: 70,
    height: 70,
    borderRadius: 50,
    objectFit: "contain",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 15,
    width: "90%",
    height: 45,
    borderRadius: 5,
    backgroundColor: "#EAEAEA",
    margin: "auto",
    marginVertical: 0,
  },
  searchText: {
    color: "#79797B",
    fontSize: 16,
    marginLeft: 5,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 5,
  },
  locationText: {
    color: "#567EDB",
    fontSize: 14,
    marginLeft: 1,
  },
  CategoryText: {
    color: "#282828",
    fontSize: 16,
    marginLeft: 25,
    marginTop: 10,
    fontWeight: "500",
    marginBottom: 5,
  },
  scrollCategory: {
    width: 80,
    height: 80,
    backgroundColor: "#EAEAEA",
    margin: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15,
  },
  scrolllist: {
    width: 200,
    height: 200,
    backgroundColor: "#EAEAEA",
    margin: 5,
    borderRadius: 5,
    marginTop: 10,
  },
});
