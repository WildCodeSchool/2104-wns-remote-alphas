import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useQuery } from "@apollo/client";
import { GET_COURSES } from '../utils/apollo';
import { CourseType } from '../utils/types';
import Course from '../components/Course';
import { ScrollView } from "react-native-gesture-handler";

export default function ListCourse({navigation}) {
  const { loading, error, data } =
  useQuery<{ getCourses: CourseType[] }>(GET_COURSES);

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>Error loading courses</Text>;
    
  return (
    <View style={styles.courses}>
      {data.getCourses.map((course) => (
        <Course
        navigation={navigation}
        image={course.image_url}
        title={course.courseName}
        techno={course.technos}
        key={course._id}
        id={course._id}
        />
      ))}            
    </View>
  );
}

const styles = StyleSheet.create({
  courses: {
    backgroundColor: 'rgb(41, 41, 41)',
  }
});
