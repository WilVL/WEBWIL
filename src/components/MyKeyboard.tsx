import * as React from "react";
import { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { ThemeContext } from "../context/ThemeContext";

export default function MyChat() {
  const theme = useContext(ThemeContext);
  const [messages, setMessages] = React.useState([
    { id: 1, sender: 'User 1', text: 'Holaaaaaa' },
    { id: 2, sender: 'User 2', text: 'Como estás?' },
    { id: 3, sender: 'User 1', text: 'Todo bien.' },
    { id: 4, sender: 'User 2', text: 'Ah que bueno' },
    { id: 5, sender: 'User 1', text: 'Qué hora es alla?' },
    { id: 6, sender: 'User 1', text: 'Quiero ir' },
  ]);

  return (
    <ScrollView style={theme === 'light' ? Styles.chatContainer : Styles.chatContainerDark}>
      {messages.map((message) => (
        <View
          key={message.id}
          style={message.sender === 'User 1'
            ? (theme === 'light' ? Styles.messageUser1 : Styles.messageUser1Dark)
            : (theme === 'light' ? Styles.messageUser2 : Styles.messageUser2Dark)
          }
        >
          <Text style={theme === 'light' ? Styles.messageText : Styles.messageTextDark}>
            {message.text}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
