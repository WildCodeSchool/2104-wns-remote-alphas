import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/Home";
import CameraScreen from "./screens/CameraScreen";
import DiscussList from "./screens/DiscussList";
import ChatInterface from "./screens/ChatInterface";

const ChatStack = createStackNavigator();

function MessageStackScreen() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="Discussions" component={DiscussList} />
      <ChatStack.Screen name="ChatRoom" component={ChatInterface} />
    </ChatStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            let iconName: any;

            if (route.name === "Accueil") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Caméra") {
              iconName = focused ? "ios-camera" : "ios-camera-outline";
            } else if (route.name === "Messages") {
              iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            }
            // else if (route.name === "Discussions") {
            //   iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            // } else if (route.name === "ChatRoom") {
            //   iconName = focused
            //     ? "chatbox-ellipses"
            //     : "chatbox-ellipses-outline";
            // }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#68d0fc",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Accueil" component={Home} />
        <Tab.Screen name="Messages" component={MessageStackScreen} />
        {/* <Tab.Screen name="Discussions" component={DiscussList} /> */}
        {/* <Tab.Screen name="ChatRoom" component={ChatInterface} /> */}
        <Tab.Screen name="Caméra" component={CameraScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
