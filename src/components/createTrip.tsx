import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useMemo, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {
    Surface, TextInput
} from 'react-native-paper';
import { getSecureStore, User } from '../service/secureStore';
import Button from './shared/Button';

type Props = {
    id: number;
    name: string;
    handle: string;
    date: string;
    content: string;
    image: string;
    avatar: string;
    comments: number;
    retweets: number;
    hearts: number;
};

export const CreateTrip = () => {
    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(true);

    const minimumDate = useMemo(() => {
        const today = new Date();

        if (today.getHours() >= 17) {
            return new Date(today.setDate(today.getDate() + 1));
        }

        return today;
    }, []);

    const [selectedDate, setSelectedDate] = useState(minimumDate);
    const [textStartDate, setTextStartDate] = useState(null);
    const [textEndDate, setTextEndDate] = useState(null);

    
    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || minimumDate;
        setShow(Platform.OS === 'ios');
        setSelectedDate(currentDate);

        if (startDate) {
            setTextStartDate(String(currentDate));
        } else {
            setTextEndDate(String(currentDate));
        }
    };

    const openDate = (startDate: boolean) => {
        setStartDate(startDate);
        setShow(true);
    };

    const getUser = async () => {
        const userData: User = await getSecureStore("user");
        console.log(userData);
    };


    return (
        <Surface style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    label="País"
                    mode="outlined"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TouchableWithoutFeedback onPress={() => { openDate(true) }}>
                    <View pointerEvents="none">
                        <TextInput
                            style={styles.input}
                            label="Start Date"
                            mode="outlined"
                            value={textStartDate}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => { openDate(false) }}>
                    <View pointerEvents="none">
                        <TextInput
                            style={styles.input}
                            label="End Date"
                            mode="outlined"
                            value={textEndDate}
                        />
                    </View>
                </TouchableWithoutFeedback>

                {show && (
                    <DateTimePicker
                        mode="date"
                        is24Hour
                        display="calendar"
                        value={selectedDate}
                        onChange={onChangeDate}
                        minimumDate={minimumDate}
                    />)}

                <Button
                    onPress={() => { getUser() }}
                    mode="contained"
                >
                    Save
                </Button>
            </View>

        </Surface>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        backgroundColor: '#fff',
        marginBottom: 16,
    },
    avatar: {
        marginRight: 20,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    handle: {
        marginRight: 3,
        lineHeight: 12,
    },
    content: {
        marginTop: 25,
        fontSize: 20,
        lineHeight: 30,
    },
    image: {
        borderWidth: StyleSheet.hairlineWidth,
        marginTop: 25,
        borderRadius: 20,
        width: '100%',
        height: 280,
    },
});
