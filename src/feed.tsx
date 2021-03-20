import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, FlatList, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { StackNavigatorParamlist } from './components/navigation/types';
import { TripFeed } from './components/tripFeed';
import { Trip } from './models/trip';
import api from './service/api';

type TwittProps = React.ComponentProps<typeof TripFeed>;

function renderItem({ item }: { item: TwittProps }) {
  return <TripFeed {...item} />;
}

function keyExtractor(item: TwittProps) {
  return item.id.toString();
}


export const Feed = ({ navigation }) => {
  const theme = useTheme();
  const [trips, setTrips] = useState<Trip[] | null>(null);
  const [text, setText] = React.useState('');
  const hasUnsavedChanges = Boolean(text);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          "Exit App",
          "Do you want to exit?",
          [
            {
              text: "No",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "Yes", onPress: () => BackHandler.exitApp() }
          ],
          { cancelable: false }
        );
      }),
    [navigation, hasUnsavedChanges]
  );

  useEffect(() => {
    api.get("trip").then((response) => {
      setTrips(response.data);
    });
  }, []);

  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: theme.colors.background }}
      style={{ backgroundColor: theme.colors.background }}
      data={trips}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{ height: StyleSheet.hairlineWidth }} />
      )}
    />
  );
};
