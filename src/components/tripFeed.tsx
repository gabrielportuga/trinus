import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import color from 'color';
import { DateTime } from 'luxon';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  Avatar, Caption, Subheading, Surface,
  Text, Title,
  TouchableRipple,
  useTheme
} from 'react-native-paper';
import { Trip } from '../models/trip';

export const TripFeed = (props: Trip)  => {
  const theme = useTheme();
  const navigation = useNavigation();

  const iconColor = color(theme.colors.text)
    .alpha(0.54)
    .rgb()
    .string();

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

  const onPress = () => {
    navigation.navigate("MyTripDetails", {trip: props});
  }

  return (
    <TouchableRipple onPress={() => onPress()}>
      <Surface style={styles.container}>

        <View style={styles.leftColumn}>
          {(props.user && props.user.photoUrl) ?
            <Avatar.Image source={{ uri: props.user.photoUrl }} size={50} /> :
            <Avatar.Text style={{ backgroundColor: getRandomColor() }} size={50} label={props.user.name.substr(0, 1).toUpperCase()} />
          }
        </View>

        <View style={styles.rightColumn}>
          <Title>{props.user.name}</Title>
          <View style={styles.topRow}>
            <Subheading>{props.name}</Subheading>
            <Subheading style={[styles.handle, styles.dot]}>{'\u2B24'}</Subheading>
            <Subheading style={styles.handle}>{props.country}</Subheading>
          </View>
          <Caption>{DateTime.fromISO(props.startDate).toFormat('dd/MM/yyyy')} - {DateTime.fromISO(props.endDate).toFormat('dd/MM/yyyy')}</Caption>
          <Text style={{ color: contentColor }}>{props.note}</Text>

          {/* <Image
            source={{ uri: props.image }}
            style={[
              styles.image,
              {
                borderColor: imageBorderColor,
              },
            ]}
          /> */}
          <View style={styles.bottomRow}>
            <TouchableOpacity
              onPress={() => { }}
              hitSlop={{ top: 10, bottom: 10 }}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={16}
                  color={iconColor}
                />
                <Caption style={styles.iconDescription}>
                  1
                </Caption>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { }}
              hitSlop={{ top: 10, bottom: 10 }}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={16}
                  color={iconColor}
                />
                <Caption style={styles.iconDescription}>
                  2
                </Caption>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { }}
              hitSlop={{ top: 10, bottom: 10 }}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={16}
                  color={iconColor}
                />
                <Caption style={styles.iconDescription}>3</Caption>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Surface>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingRight: 20,
  },
  leftColumn: {
    width: 80,
    alignItems: 'center',
  },
  rightColumn: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  handle: {
    marginLeft: 3,
    marginRight: 3,
  },
  dot: {
    fontSize: 3,
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    borderRadius: 20,
    width: '100%',
    height: 150,
  },
  bottomRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconDescription: {
    marginLeft: 2,
    lineHeight: 15,
  },
});
