import { View, Text, FlatList, StyleSheet } from "react-native";
import React from 'react';


const list = [
    'Hello',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',
    'World',];

function ListTab() {
    return (
        <View >
            <FlatList data={list}
                renderItem={({ item }) => <Text style={styles.baseText}>{item}</Text>} />
        </View >
    );
}

const styles = StyleSheet.create({
    baseText: {
        fontSize: 20,
        color: 'black'

    },
});

export default ListTab;