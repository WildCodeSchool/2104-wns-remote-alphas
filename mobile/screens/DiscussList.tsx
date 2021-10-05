import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Discuss from "../components/Discuss";

function DiscussList({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Discuss navigation={navigation} />
      {/* <Button
        title="Back to home"
        onPress={() => navigation.navigate("Accueil")}
      /> */}
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
