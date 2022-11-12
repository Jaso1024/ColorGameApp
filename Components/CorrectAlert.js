import react, {useRef, useEffect, useState} from "react";
import {Animated, Text, View, StyleSheet, Dimensions, TouchableOpacity} from "react-native";





export const CorrectAlert = (props) => {  
    const fade = useRef(new Animated.Value(0)).current
    let fadeInTimeout = null
    let fadeOutTimeout = null

    const applyFade = () => {
        fadeInTimeout = setTimeout(() => Animated.timing(fade, {toValue: 1, duration: 500, useNativeDriver: true}).start(), 1)
        fadeOutTimeout = setTimeout(() => Animated.timing(fade, {toValue: 0, duration: 500, useNativeDriver: true}).start(), 501)
    }

    useEffect(() => {
        clearTimeout(fadeInTimeout)
        clearTimeout(fadeOutTimeout)
        applyFade()
    })

    const getAlert = () => {
        if (props.correct) {
            return (
                <Text style={{...styles.alertText, color: "green"}}>
                    Correct!
                </Text>
            )
        }
        else {
            return (
               <Text style={{...styles.alertText, color: "red"}}>
                    Incorrect!
                </Text>  
            )
            
        }
    }
    return (
        <Animated.View style={{...styles.alertContainer, opacity: fade}}>
            {getAlert()}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    alertContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    alertText: {
        fontSize: 50,
    }
})