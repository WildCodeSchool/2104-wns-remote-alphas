import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/apple-touch-icon.png")}
        style={{ width: 40, height: 40 }}
      />
      <Text style={styles.textContainer1}>Masterize ChatRoom</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-evenly",
    paddingTop: 100,
  },
  textContainer1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
});
