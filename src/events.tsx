import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { TripPlans } from './components/tripPlans';
import { notificationTweets } from './data';


type TripPlansProps = React.ComponentProps<typeof TripPlans>;

function renderItem({ item }: { item: TripPlansProps }) {
  return <TripPlans {...item} />;
}

function keyExtractor(item: TripPlansProps) {
  return item.id.toString();
}

export const Events = () => {
  const theme = useTheme();

  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: theme.colors.background }}
      style={{ backgroundColor: theme.colors.background }}
      data={notificationTweets}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{ height: StyleSheet.hairlineWidth }} />
      )}
    />
  );
};
