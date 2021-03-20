import color from 'color';
import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar, Caption,
  Subheading, Surface,
  Title,
  useTheme
} from 'react-native-paper';
import { Trip } from '../models/trip';


export const DetailedTrip = ({ route }) => {
  const theme = useTheme();
  const [trip, setTrip] = useState<Trip | null>(null);

  const contentColor = color(theme.colors.text)
    .alpha(0.8)
    .rgb()
    .string();

  const imageBorderColor = color(theme.colors.text)
    .alpha(0.15)
    .rgb()
    .string();

  const getRandomColor = () => {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  }
  useEffect(() => {
    setTrip(route.params.trip);
  }, []);

  return (
    <Surface style={styles.container}>
      {trip &&
        <View>
          <View style={styles.topRow}>
            {(trip.user && trip.user.photoUrl) ?
              <Avatar.Image style={styles.avatar} source={{ uri: trip.user.photoUrl }} size={50} /> :
              <Avatar.Text style={[styles.avatar, { backgroundColor: getRandomColor() }]} size={50} label={trip.user.name.substr(0, 1).toUpperCase()} />
            }
            <View>
              <Title>{trip.user.name}</Title>
              <Caption style={styles.handle}>{trip.name}</Caption>
              <Subheading>{trip.country}</Subheading>
          <Caption>{DateTime.fromISO(trip.startDate).toFormat('dd/MM/yyyy')} - {DateTime.fromISO(trip.endDate).toFormat('dd/MM/yyyy')}</Caption>

            </View>
          </View>

          
          <Subheading style={[styles.content, { color: contentColor }]}>
            {trip.note}
          </Subheading>
          {/* <Image
        source={{ uri: trip.image }}
        style={[
          styles.image,
          {
            borderColor: imageBorderColor,
          },
        ]}
      /> */}
        </View>
      }
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  avatar: {
    marginRight: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
