import React, { useState, useEffect, useCallback } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { StyleSheet, View, Text } from "react-native";
import {
  Bubble,
  BubbleProps,
  GiftedChat,
  Send,
  Avatar,
  AvatarProps,
} from "react-native-gifted-chat";
import UserContext from "../context/UserContext";

interface Message {
  _id: string | number;
  createdAt: number | Date;
  user: { _id: string | number; name: string; avatar: string };
  text: string;
}
interface APIMessage {
  _id: string;
  sentAt: number | Date;
  author: { _id: string; firstName: string };
  text: string;
}
const GET_MESSAGES = gql`
  query {
    getMessages {
      _id
      author {
        _id
        firstName
      }
      text
      sentAt
    }
  }
`;
const GET_NEW_MESSAGE = gql`
  subscription {
    newMessage {
      _id
      author {
        _id
        firstName
      }
      text
      sentAt
    }
  }
`;
const POST_MESSAGE = gql`
  mutation postMessage($message: String!) {
    postMessage(message: $message) {
      _id
      text
      author {
        firstName
      }
      sentAt
    }
  }
`;
function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const { data, subscribeToMore } = useQuery(GET_MESSAGES);
  const { userData } = React.useContext(UserContext);
  console.log(userData._id);
  const [addTodo, mutationLogs] = useMutation(POST_MESSAGE);
  useEffect(() => {
    if (data) {
      setMessages([
        messages,
        ...data.getMessages.map((message: APIMessage) => {
          return {
            createdAt: message.sentAt,
            text: message.text,
            _id: message._id,
            user: {
              name: message.author.firstName,
              _id: message.author._id,
              avatar:
                "data:image/jpeg;base64,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",
            },
          };
        }),
      ]);
    }
    if (subscribeToMore) {
      subscribeToMore<{
        newMessage: {
          _id: string | number;
          author: { firstName: string; _id: string | number };
          text: string;
          sentAt: number | Date;
        };
      }>({
        document: GET_NEW_MESSAGE,
        updateQuery: (
          previous: { getMessages: APIMessage[] },
          {
            subscriptionData: {
              data: { newMessage },
            },
          }
        ) => {
          const a = [...previous.getMessages];
          setMessages([
            {
              createdAt: newMessage.sentAt,
              text: newMessage.text,
              _id: newMessage._id,
              user: {
                name: newMessage.author.firstName,
                _id: newMessage.author._id,
                avatar:
                  "data:image/jpeg;base64,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",
              },
            },
            ...a.map((message: APIMessage) => {
              return {
                createdAt: message.sentAt,
                text: message.text,
                _id: message._id,
                user: {
                  name: message.author.firstName,
                  _id: message.author._id,
                  avatar:
                    "data:image/jpeg;base64,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",
                },
              };
            }),
          ]);
          // return [...previous.getMessages, newMessage];
        },
      });
    }
  }, [data, subscribeToMore]);

  // const onSend = useCallback((messages = {}) => {
  //   setMessages((previousMessages) =>
  //     GiftedChat.append(previousMessages, messages)
  //   );
  // }, []);
  function getPos(condition: boolean) {
    console.log(condition);
    return condition ? "right" : "left";
  }
  const renderBubble = (props: BubbleProps<Message>) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#25d366",
          },
          left: {
            backgroundColor: "#4d4d4d",
          },
        }}
        position={
          userData._id === props.currentMessage.user._id ? "right" : "left"
        }
        textStyle={{
          left: {
            color: "white",
          },
          right: {},
        }}
      />
    );
  };
  const renderAvatar = (props: AvatarProps<Message>) => {
    console.log(props, "===> Props");
    return (
      <Avatar
        {...props}
        showAvatarForEveryMessage={true}
        position={
          userData._id === props.currentMessage.user._id ? "right" : "left"
        }
      />
    );
  };
  return (
    // <View style={styles.container}>
    //   <Text>ChatRoom</Text>
    // </View>

    <GiftedChat
      messages={messages}
      onSend={(messages) => {
        // onSend(messages);
        addTodo({ variables: { message: messages[0].text } });
      }}
      renderBubble={renderBubble}
      renderAvatar={renderAvatar}
      alwaysShowSend
      scrollToBottom
    />
  );
}

export default ChatInterface;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292929",
  },
});
