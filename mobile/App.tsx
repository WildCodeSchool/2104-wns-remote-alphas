import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/Home";
import CameraScreen from "./screens/CameraScreen";
import DiscussList from "./screens/DiscussList";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === "Accueil") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Caméra") {
              iconName = focused ? "ios-camera" : "ios-camera-outline";
            } else if (route.name === "Discussion") {
              iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#68d0fc",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Accueil" component={Home} />
        <Tab.Screen name="Discussion" component={DiscussList} />
        <Tab.Screen name="Caméra" component={CameraScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
