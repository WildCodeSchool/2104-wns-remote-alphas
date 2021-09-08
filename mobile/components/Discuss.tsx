import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const Discuss = ({ navigation }: any) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("ChatRoom");
      }}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/apple-touch-icon.png")}
          style={{ width: 50, height: 50 }}
        />
        <View>
          <Text style={styles.textContain3}>Title</Text>
          <Text style={styles.textContain1}>Firstname Lastname</Text>
        </View>

        <Text style={styles.textContain2}>Date/hour</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Discuss;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#292929",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderColor: "white",
  },
  container2: {
    display: "flex",
    flexDirection: "column",
  },
  textContain1: {
    color: "white",
  },
  textContain2: {
    color: "white",
  },
  textContain3: {
    color: "#68d0fc",
    fontWeight: "bold",
    fontSize: 20,
  },
});
