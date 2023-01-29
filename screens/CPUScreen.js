import { SafeAreaView, Text, Button, FlatList } from "react-native";
import { useState } from "react";
import React from 'react';

function CPUScreen() {
    const [text, changeText] = useState("Duration:\nResult:")

    const runCalculation = () => {
        addText("Starting calculations...")
        let startDate = Date.now()
        let result = 0
        for (var i = Math.pow(20, 7); i >= 0; i--) {
            result += Math.atan(i) * Math.tan(i)
        };
        let endDate = Date.now()
        let delta = endDate - startDate
        let text = "Duration: " + delta + " ms.\nResult: " + result
        changeText(text)
        return;
    }

    return (
        <SafeAreaView>
            <Button
                onPress={() => {
                    runCalculation()
                }}
                disabled={false}
                title={"Run Task"}
            />
            <Text>{text}</Text>
        </SafeAreaView >
    );
}

export default CPUScreen