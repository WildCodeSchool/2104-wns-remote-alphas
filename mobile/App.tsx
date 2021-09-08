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
import { NavigationContainer } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/Home";
import CameraScreen from "./screens/CameraScreen";
import DiscussList from "./screens/DiscussList";
import UserContext from "./context/UserContext";

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
  const [userToken, setUserToken] = React.useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJ0aGVvZG9yZS5sZWZyYW5jb2lzMjkwNkBnbWFpbC5jb20iLCJpYXQiOjE2MzA5MzIyMDN9.WWsfewJCBK8gPV_X4zUXLjgtBxg8gYGb1OFoztPezow"
  );
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

  React.useEffect(() => {
    if (!userData && userToken) {
      client.query({ query: ME }).then((result) => {
        setUserData(result.data.me);
      });
    }
  }, [userData]);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, userToken, setUserToken }}
    >
      <ApolloProvider client={client}>
        <NavigationContainer>
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
      </ApolloProvider>
    </UserContext.Provider>
  );
}
AppRegistry.registerComponent("MyApplication", () => App);
