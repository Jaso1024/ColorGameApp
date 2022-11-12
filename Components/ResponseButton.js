import React, { useState } from "react";
import {Text, View, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import { CorrectAlert } from "./CorrectAlert";


export const ResponseButton = (props) => {

    const responseclick = () => {
        props.setscore(props.correct)
        
    }

    return (
        <TouchableOpacity onPress={responseclick}>
            <View style={styles.container}>
                <Text>{props.hex}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 50,
        backgroundColor: "grey",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        
    },
})