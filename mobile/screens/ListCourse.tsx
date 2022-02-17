import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useQuery } from "@apollo/client";
import { GET_COURSES } from '../utils/apollo';
import { CourseType } from '../utils/types';
import Course from '../components/Course';

export default function ListCourse() {
    const { loading, error, data } =
    useQuery<{ getCourses: CourseType[] }>(GET_COURSES);

    if (loading) return <Text>Loading</Text>;
    if (error) return <Text>Error loading books feed</Text>;
    
  return (
    
    <View>
        <View>
        {data.getCourses.map((course) => (

            <Course
            title={course.courseName}
            />
        ))}

                <Text></Text>

        </View>
            
    </View>
  );
}

const styles = StyleSheet.create({

});
