import { StyleSheet } from "react-native";
import { myColors } from "./Colors"; 

export const Styles = StyleSheet.create({
    // Chat styles
    chatContainer: {
        padding: 10,
        backgroundColor: myColors.light,
        flex: 1,
    },
    chatContainerDark: {
        padding: 10,
        backgroundColor: myColors.dark,
        flex: 1,
    },
    messageUser1: {
        backgroundColor: myColors.blue,
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignSelf: "flex-start",
        maxWidth: "70%",
    },
    messageUser1Dark: {
        backgroundColor: myColors.result,
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignSelf: "flex-start",
        maxWidth: "70%",
    },
    messageUser2: {
        backgroundColor: myColors.gray,
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignSelf: "flex-end",
        maxWidth: "70%",
    },
    messageUser2Dark: {
        backgroundColor: myColors.btnGray,
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignSelf: "flex-end",
        maxWidth: "70%",
    },
    messageText: {
        color: myColors.white,
        fontSize: 16,
    },
    messageTextDark: {
        color: myColors.black,
        fontSize: 16,
    },
    // Button styles remain unchanged
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
});
