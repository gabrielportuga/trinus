import { DateTime } from 'luxon';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { TripPlans } from './components/tripPlans';
import { notificationTweets } from './data';
import { months } from './utils/dateFunctions';


type TripPlansProps = React.ComponentProps<typeof TripPlans>;

function renderItem({ item }: { item: TripPlansProps }) {
  return <TripPlans {...item} />;
}

function keyExtractor(item: TripPlansProps) {
  return item.id.toString();
}

export const Events = () => {
  const theme = useTheme();

  useEffect(() => {
    console.log('Agrupar meses');
    //const meses: any[] = months(DateTime.now(), DateTime.now().plus({months: 12}));
    //console.log(meses);
  }, []);

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
