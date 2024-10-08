import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useMemo, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {
    Surface, TextInput
} from 'react-native-paper';
import { Trip } from '../models/trip';
import { UserGoogle } from '../models/userGoogle';
import { getSecureStore } from '../service/secureStore';
import Button from './shared/Button';
import { DateTime } from 'luxon';

export const CreateTrip = () => {
    const [trip, setTrip] = useState<Trip>(new Trip());
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(true);

    const minimumDate = useMemo(() => {
        const today = new Date();
        return today;
    }, []);

    const [selectedDate, setSelectedDate] = useState<Date>(minimumDate);

    const onChangeDate = (event, selectedDate: Date) => {
        const currentDate = selectedDate || minimumDate;
        setShow(Platform.OS === 'ios');
        setSelectedDate(currentDate);

        if (startDate) {
            setTrip({ ...trip, startDate: DateTime.fromJSDate(currentDate).toFormat('dd/MM/yyyy')});
        } else {
            setTrip({ ...trip, endDate: DateTime.fromJSDate(currentDate).toFormat('dd/MM/yyyy')});
        }
    };

    const openDate = (startDate: boolean) => {
        setStartDate(startDate);
        setShow(true);
    };

    const getUser = async () => {
        const userData: UserGoogle = await getSecureStore("user");
        console.log(userData);
        console.log(trip);
    };


    return (
        <Surface style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    label="País"
                    mode="outlined"
                    value={trip.country}
                    onChangeText={country => setTrip({ ...trip, country: country })}
                />
                <TouchableWithoutFeedback onPress={() => { openDate(true) }}>
                    <View pointerEvents="none">
                        <TextInput
                            style={styles.input}
                            label="Start Date"
                            mode="outlined"
                            value={trip.startDate}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => { openDate(false) }}>
                    <View pointerEvents="none">
                        <TextInput
                            style={styles.input}
                            label="End Date"
                            mode="outlined"
                            value={trip.endDate}
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

                <TextInput
                    style={styles.input}
                    label="Note"
                    mode="outlined"
                    value={trip.note}
                    multiline={true}
                    onChangeText={note => setTrip({ ...trip, note: note })}
                />

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
