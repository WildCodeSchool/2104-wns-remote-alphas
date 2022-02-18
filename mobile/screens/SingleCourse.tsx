import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useQuery } from '@apollo/client';
import { GET_ONE_COURSE } from '../utils/apollo';
import { CourseType } from '../utils/types';
import { ScrollView } from "react-native-gesture-handler";


export default function SingleCourse({route}) {
    const { loading, error, data } = useQuery<{ getCourseById: CourseType }>(
		GET_ONE_COURSE,
		{
			variables: { _id: route.params.id },
		}
	);

    function formattedDate(date: string) {
		const parsedDate = Date.parse(date);
		const localeDate = new Date(parsedDate).toLocaleDateString('fr-FR');
		return localeDate;
	}

    if (loading) return <Text>Loading</Text>;
    if (error) return  <Text>Error loading courses</Text>;
    
  return (
      <View style={styles.singlecourse}>
          <View style={styles.card}>
            <ScrollView>
                <Text style={styles.text}>
                    <Text>{data?.getCourseById.courseName}</Text>
                    <Text>{formattedDate(data?.getCourseById.postedAt)}</Text>
                </Text>
                <View style={styles.imgcontent}>
                    <Image style={styles.images} source={{uri: data?.getCourseById.image_url}}></Image>
                </View>
                <Text>{data?.getCourseById.description}</Text>   
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
        margin: 30,
        padding: 10,
    },
    images: {
        height: 80,
        width: 80,
        alignItems: 'center'
    },
    imgcontent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }


});

