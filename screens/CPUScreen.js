import { SafeAreaView, Text, Button, FlatList } from "react-native";
import { useEffect, useState } from "react";
import React from 'react';

function CPUScreen() {
    const [texts, changeTexts] = useState([])

    useEffect(() => {
    }, []);

    const addText = (string) => {
        string = { key: string }
        changeTexts(texts => [...texts, string])
        console.log()
        return;
    }

    const runCalculation = () => {
        addText("Starting calculations...")
        let startDate = Date.now()
        let result = 0;
        for (var i = Math.pow(20, 7); i >= 0; i--) {
            result += Math.atan(i) * Math.tan(i);
        };
        let endDate = Date.now()
        let delta = endDate - startDate
        addText("Duration: " + delta + " ms")
        addText("Result: " + result)
        addText("End of calculations.")
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
            <FlatList
                data={texts}
                renderItem={({ item }) => <Text>{item.key}</Text>}
            />
        </SafeAreaView >
    );
}

export default CPUScreen