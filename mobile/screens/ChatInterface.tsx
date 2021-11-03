import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";

interface Data {
  _id: any;
  text: any;
  createdAt: any;
  user: any;
}

function ChatInterface() {
  const [messages, setMessages] = useState<Data[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello World",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React-Native",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderBubble = (props: any) => {
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
        textStyle={{
          left: {
            color: "white",
          },
        }}
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
        onSend(messages);
      }}
      renderBubble={renderBubble}
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
