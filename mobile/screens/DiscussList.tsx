import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Discuss from "../components/Discuss";

function DiscussList() {
  return (
    <View style={styles.container}>
      <Discuss />
    </View>
  );
}

export default DiscussList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    display: "flex",
    flexDirection: "column",
    paddingTop: 100,
  },
});
