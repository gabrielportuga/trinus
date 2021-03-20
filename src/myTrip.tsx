import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { Surface, useTheme } from 'react-native-paper';
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

export const MyTrip = () => {
  const theme = useTheme();

  const [trips, setTrips] = useState<Trip[] | null>(null);

  useEffect(() => {
    api.get("trip").then((response) => {
      setTrips(response.data);
    });
  }, []);


  return (
    <Surface style={styles.container}>
      {
        (trips) ?
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
          :
          <View style={styles.content}>
            <Image source={require('./assets/cherry-traveling.png')} style={styles.logo}>
            </Image>
          </View>
      }
    </Surface>)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 200,
  },
});

