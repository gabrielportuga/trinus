import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
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

type Props = {
  navigation?: StackNavigationProp<StackNavigatorParamlist>;
};

export const Feed = (props: Props) => {
  const theme = useTheme();
  const [trips, setTrips] = useState<Trip[] | null>(null);

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
