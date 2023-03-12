import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.BoxTitle}>
            <Text style={styles.textTitle}>ONEBITHEALTH</Text>
        </View>
    )
}