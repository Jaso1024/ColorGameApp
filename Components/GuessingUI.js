import React, { useState } from "react";
import {Text, View, StyleSheet, Dimensions, Button} from "react-native";
import { ColorBox } from "./ColorBox";
import { SkipButton } from "./SkipButton";
import { ResponseButton } from "./ResponseButton";
import { CorrectAlert } from "./CorrectAlert";


export const GuessingUI = () => {
    const getRandomColor = () => {
        return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
    }

    const [state, setState] = useState({color: getRandomColor(), score: 0, alert: false, alertTimeouts: []})
    

    const resetColor = () => {
        setState({...state, color: getRandomColor()})
    }

    const clearTimeouts = () => {
        for(let timeout of state.alertTimeouts) {
            clearTimeout(timeout)
        }
    }
    const setScore = (correct) => {
        const newscore = correct ? state.score+1 : state.score-1
        const newstate = {...state, color: getRandomColor(), score: newscore}
        clearTimeouts()

        if (correct) {
            setState(() => ({...newstate, alert: true}))
            state.alertTimeouts.push(setTimeout(() => setState(() => ({...newstate, alert: false})), 1000))
        }
        else {
            setState(newstate)
        }
    }


    const alert = () => {
        if (state.alert){
            return <CorrectAlert></CorrectAlert>
        }
        else{
            return null
        }
            
 
        }

    const getButtons = () => {
        const answerIndex = Math.floor(Math.random() *3)
        const buttons = [1,1,1]
        return (
            <Text>
                {
                    buttons.map((button, i) =>
                    i==answerIndex? 
                    <ResponseButton hex={state.color} correct={true} setscore={setScore} score={state.score}></ResponseButton> :
                    <ResponseButton hex={getRandomColor()} correct={false} setscore={setScore} score={state.score}></ResponseButton>)
                }
            </Text>
        )
    }

    
    
    return(
        <View style={styles.container}>
            <View style={styles.alertContainer}>
                {alert()}
            </View>
            <View style={styles.colorContainer}>
                <Text style={styles.scoreText}>Score: {state.score}</Text>
                <ColorBox color={state.color}></ColorBox>
                <SkipButton resetcolor={resetColor}></SkipButton>
            </View>
            <View style={styles.answerContainer}>
                {getButtons()}
            </View>
        </View>
        

    );



}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    alertContainer: {
        flex: 1,
        marginTop: 100,
    },
    colorContainer: {
        flex: 2,
        alignItems: "center",
        marginTop: 10,
    },
    answerContainer: {
        flex:3,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    scoreText: {
        color: "grey",
        fontSize: 25,
    }
})