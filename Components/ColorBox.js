import React, { useState } from "react";
import {Text, View, StyleSheet, Dimensions} from "react-native";

export const ColorBox = (props) => {
    return (
        <View style={{...styles.box, "backgroundColor":props.color}}></View>
    )
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: null,
        width: 250,
        height: 150,
        borderRadius: 15,
    }
});