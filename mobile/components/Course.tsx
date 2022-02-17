import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";


const Course = (props) => {
  return (
    <SafeAreaView>
        <Text>{props.title}</Text>

    </SafeAreaView>
  );
}
export default Course;

const styles = StyleSheet.create({

});
