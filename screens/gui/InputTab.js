import { SafeAreaView, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";
import React from 'react';


function InputTab() {
    const [text1, onChangeText1] = useState("");
    const [text2, onChangeText2] = useState("");
    const [text3, onChangeText3] = useState("");



    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText1}
                value={text1}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText2}
                value={text2}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText3}
                value={text3}
            />
            <Button
                onPress={() => { onChangeText1(''); onChangeText2(''); onChangeText3(''); }}
                title="Clear"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default InputTab;