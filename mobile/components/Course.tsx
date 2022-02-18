import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


const Course = (props, {navigation}) => {
  return (
    <ScrollView>
      <TouchableOpacity
      style={styles.container}
       onPress={() => {
        console.log('click here')
        props.navigation.navigate("Single", {id: props.id});
      }} >
        <Image source={{uri: props.image}} style={styles.image} />
        <Text style={styles.textcontent}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.technos}>{props.techno}</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
export default Course;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    margin: 12,
    border: 'solid #ECEFF1 0.75px',
    borderRadius: 4,
    backgroundColor: 'white'
  },
    image: {
        width: 70,
        height: 70,
    },
    textcontent: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 8,
    },
    title: {
      color: '#292929',
      fontSize: 16,
    },
    technos: {
      color: '#FE7F2D'

    }

});
