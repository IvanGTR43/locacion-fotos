import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading(props){
    const { isVisible, text } = props
    //un overlay es similar a un model de bootstrap
    return(
        <Overlay
                overlayStyle={style.overlayStyles}
            isVisible={isVisible}
            windowBackgroundColor="rgba(0,0,0,0.5)"
            overlayBackgroundColor="transparent">
            <View style={style.view}>
                <ActivityIndicator size="large" color="#00a680" />
                {text && <Text style={style.text}>{text}</Text>}
            </View>
        </Overlay>
    )
}

const style = StyleSheet.create({
    overlayStyles:{
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
        borderColor: '#00a680',
        borderWidth: 2,
        borderRadius: 10,
    },
    view:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        color:"#00a680",
        textTransform:"uppercase",
        marginTop: "10",
    }
})