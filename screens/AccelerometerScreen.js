import {
    Button,
    SafeAreaView,
    StatusBar,
    Text,
    View,
} from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { useState } from 'react';
import React from 'react';

//code snippet from https://docs.expo.dev/versions/latest/sdk/accelerometer/

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription] = useState(null);

    const [average, setAverage] = useState(null);
    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);
    const [times, setTimes] = useState([]);

    let time;

    const _slow = () => {
        Accelerometer.setUpdateInterval(150);
    };

    const _fast = () => {
        Accelerometer.setUpdateInterval(35);
    };

    const _subscribe = () => {
        setSubscription(
            Accelerometer.addListener(accelerometerData => {
                newTime = new Date().getTime();
                duration = newTime - time;
                time = newTime;
                setTimes(oldTimes => [...oldTimes, duration]);
                console.log(times);
                console.log(duration);
                setData(accelerometerData);
            })
        );
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        Accelerometer.removeAllListeners();
        setSubscription(null);
    };

    const _runTask = () => {
        console.log("Run Task")
        time = new Date().getTime();
        _subscribe();
    };

    const _stopTask = () => {
        _unsubscribe();

        let _average = 0;
        let _max = 0;
        let _min = 10000;
        console.log("###########");
        times.forEach(element => {
            console.log(element)
            if (element < _min) _min = element;
            if (element > _max) _max = element;
            _average += element;
        });

        _average /= times.length;

        console.log(_min);

        setAverage(_average);
        setMax(_max);
        setMin(_min);
    };

    const { x, y, z } = data;

    return (
        <SafeAreaView >
            <StatusBar />
            <View>
                <Text>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</Text>
                <Text>
                    x: {round(x)} y: {round(y)} z: {round(z)}
                </Text>
                <View style={{ flexDirection: "column" }}>
                    <Button onPress={subscription ? _unsubscribe : _subscribe}
                        title={subscription ? 'On' : 'Off'} />
                    <Button onPress={_slow} title={"Slow"} />
                    <Button onPress={_fast} title={"Fast"} />
                    <Button onPress={_runTask} title={"Start Task"} />
                    <Button onPress={_stopTask} title={"Stop Task"} />
                    <Text>{"Average: " + average}</Text>
                    <Text>{"Min:" + min}</Text>
                    <Text>{"Max: " + max}</Text>
                </View>
            </View>
        </SafeAreaView >
    );

    function round(x) { return x.toPrecision(5); }
};

export default HomeScreen