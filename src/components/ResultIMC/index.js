import React from "react";
import { Text, View } from "react-native";

export default function ResultIMC(props){
    return(
        <View>
            <Text>{ props.ResultIMC }</Text>
            <Text>{ props.messageResultIMC }</Text>
        </View>
    )
}