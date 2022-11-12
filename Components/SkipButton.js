import React, { useState } from "react";
import {Text, View, StyleSheet, Dimensions, Button,  TouchableOpacity} from "react-native";

export const SkipButton = (props) => {
    return (
            <TouchableOpacity onPress={props.resetcolor} styles={styles.button}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Skip</Text>
                </View>
            </TouchableOpacity>
        
        
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "grey",
        width: 100,
        height: 40,
        borderRadius: 7,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "grey",
        color: "grey",
        
    },
    buttonText: {
        color: "white", 
        

    }

})