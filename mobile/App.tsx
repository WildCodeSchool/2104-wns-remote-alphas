import React, { useEffect } from "react";
import { AppRegistry } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/Home";
import CameraScreen from "./screens/CameraScreen";
import DiscussList from "./screens/DiscussList";
import Login from "./components/Login";

import UserContext from "./context/UserContext";
import ChatInterface from "./screens/ChatInterface";
import AsyncStorage from "@react-native-async-storage/async-storage";


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const ChatStack = createStackNavigator();
const Stack = createStackNavigator();

function MessageStackScreen() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="Discussions" component={DiscussList} />
      <ChatStack.Screen name="ChatRoom" component={ChatInterface} />
    </ChatStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

const ME = gql`
  query {
    me {
      _id
      name
      firstName
      password
      email
    }
  }
`;

export default function App() {
  const [userData, setUserData] = React.useState(null);
  const [userToken, setUserToken] = React.useState("");
  // create the apollo client
  const httpLink = createHttpLink({
    uri: "http://localhost:8080/graphql",
  });
  const authLink = setContext((_, { headers }) => {
    const token = userToken;
    return {
      headers: {
        ...headers,
        authorization: token ? token : "",
      },
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  // get userData is there is the token and no data
  React.useEffect(() => {
    if (!userData && userToken) {
      client.query({ query: ME }).then((result) => {
        console.log(result.data.me);
        setUserData(result.data.me);
      });
    }
  }, [userData]);
  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState<any>(false);
  const notificationListener: any = React.useRef();
  const responseListener: any = React.useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const getData = async () => {
    try {
      const userToken = await AsyncStorage.getItem('@storage_Key')
      if(userToken !== null) {
        console.log("1",userToken)
        return userToken
        // value previously stored
      }
    } catch(e) {
      console.log("2",userToken)

      // error reading value
    }
  }

  getData()

  return (
    <UserContext.Provider
      value={{ userData, setUserData, userToken, setUserToken }}
    >
      <ApolloProvider client={client}>
          <NavigationContainer>
            token {this.state.userToken}
          {/*  { userToken !== null ? (  */}
            <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({
                focused,
                color,
                size,
              }: {
                focused: boolean;
                color: string;
                size: number;
              }) => {
                let iconName: any;

                if (route.name === "Accueil") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Caméra") {
                  iconName = focused ? "ios-camera" : "ios-camera-outline";
                } else if (route.name === "Messages") {
                  iconName = focused ? "chatbubbles" : "chatbubbles-outline";
                } else if (route.name === "Se connecter") {
                  iconName = focused ? "log-in" : "log-in-outline";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "#68d0fc",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Accueil" component={Home} />
            <Tab.Screen name="Messages" component={MessageStackScreen} />
            <Tab.Screen name="Se connecter" component={Login} />
            {/* <Tab.Screen name="Discussions" component={DiscussList} /> */}
            {/* <Tab.Screen name="ChatRoom" component={ChatInterface} /> */}
              <Tab.Screen name="Caméra" component={CameraScreen} />
           </Tab.Navigator>  
           {/*       ) : (
                <Stack.Navigator>
                <Stack.Screen name="Se connecter" component={Login} />
                </Stack.Navigator>
                )}  */}
 
            {/* { localStorage.getItem('token') !== null ? (
                          <Stack.Navigator>
                            <Stack.Screen name="Accueil" component={Home} />
                            <Stack.Screen name="Messages" component={MessageStackScreen} />
                            <Stack.Screen name="Discussions" component={DiscussList} />
                           </Stack.Navigator>


            ) : (
              <Stack.Navigator>
              <Stack.Screen name="Se connecter" component={Login} />
            </Stack.Navigator>

            )} */}
        </NavigationContainer>
        </ApolloProvider>
    </UserContext.Provider>
  );

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
  // async function sendPushNotification(expoPushToken) {
  //   const message = {
  //     to: expoPushToken,
  //     sound: 'default',
  //     title: 'New Masterize Course',
  //     body: 'Hey ! There is a new course in your Masterize, check this out !',
  //     data: { webLink: 'https://google.com' },
  //   };

  //   await fetch('https://exp.host/--/api/v2/push/send', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Accept-encoding': 'gzip, deflate',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(message),
  //   });
  // }

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  }
}
AppRegistry.registerComponent("MyApplication", () => App);
