import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useQuery } from '@apollo/client';
import { GET_ONE_COURSE } from '../utils/apollo';
import { CourseType } from '../utils/types';
import { ScrollView } from "react-native-gesture-handler";
import formattedDate from "../utils/formattedDate";
import { WhiteBalance } from "expo-camera/build/Camera.types";


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
          <Text style={styles.textcourse}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Phasellus pellentesque diam et ipsum porttitor, imperdiet facilisis magna scelerisque. 
            Vestibulum mi tellus, pellentesque vel sem vel, imperdiet ultricies lorem. Ut vulputate posuere nisl, 
            ac elementum est rhoncus in. Vestibulum risus lacus, semper et aliquam ac, condimentum vitae felis. 
            Fusce dictum purus eget lorem sagittis commodo. Nullam eros est, ultricies non ex a, sollicitudin condimentum tortor. 
            Fusce et orci facilisis ipsum viverra scelerisque. Suspendisse sapien sapien, bibendum at turpis eu, venenatis mattis arcu.
          </Text>
          <Text style={styles.technos}>{data?.getCourseById.technos}</Text>
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
    margin: 25,
    padding: 15,
  },
  images: {
    height: 140,
    width: 240,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
    borderRadius: 5,
  },
  imgcontent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    color: 'white'
  },
  date: {
    color: '#FE7F2D'
  },
  description : {
    color: 'white'
  },
  textcourse: {
    color: 'white',
    textAlign: 'justify',
  },
  technos: {
    backgroundColor: '#68D0FC',
    fontSize: 10,
    borderRadius: 3,
    color: '#292929',
    padding: 5,
    alignSelf: 'flex-end',
    marginTop: 25,
  }

});

