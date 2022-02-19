import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useQuery } from '@apollo/client';
import { GET_ONE_COURSE } from '../utils/apollo';
import { CourseType } from '../utils/types';
import { ScrollView } from "react-native-gesture-handler";
import formattedDate from "../utils/formattedDate";


export default function SingleCourse({route}) {
  const { loading, error, data } = useQuery<{ getCourseById: CourseType }>(
		GET_ONE_COURSE,
		{
			variables: { _id: route.params.id },
		}
	);

  if (loading) return <Text>Loading</Text>;
  if (error) return  <Text>Error loading courses</Text>;
    
  return (
    <View style={styles.singlecourse}>
      <View style={styles.card}>
        <ScrollView>
          <Text style={styles.text}>
              <Text style={styles.title}>{data?.getCourseById.courseName}</Text>
              <Text style={styles.date}>{formattedDate(data?.getCourseById.postedAt)}</Text>
          </Text>
          <View style={styles.imgcontent}>
              <Image style={styles.images} source={{uri: data?.getCourseById.image_url}}></Image>
          </View>
          <Text style={styles.description}>{data?.getCourseById.description}</Text>   
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  singlecourse: {
    backgroundColor: '#292929',
    flex: 1,
  },
  card: {
    backgroundColor: '#ECEFF1',
    borderRadius: 10,
    margin: 40,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  images: {
    height: 120,
    width: 220,
    alignItems: 'center',
    marginBottom: 10
  },
  imgcontent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
  },
  date: {
    color: '#FE7F2D'
  },
  description : {
    textAlign: 'center'
  }

});

