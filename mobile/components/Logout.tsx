import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
	TextInput,
	SafeAreaView,
	Pressable,
	TouchableOpacity
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { gql, useMutation } from "@apollo/client";
import { __handlePersistedRegistrationInfoAsync } from "expo-notifications/build/DevicePushTokenAutoRegistration.fx";
import UserContext from "../context/UserContext";
import { NavigationRouteContext } from "@react-navigation/core";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Logout = ({ navigation }: any) => {

  return (
    <View style={styles}>

    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({

});
