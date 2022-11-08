import React, {useEffect} from "react";
import {Text, View, StyleSheet, Dimensions} from "react-native";
import {vw, vh} from 'react-native-viewport-units';

export const ColorBox = () => {

    return (
        <View style={styles.box}>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "red",
        width: 30 * vw,
        height: 25 * vh,
    }
})