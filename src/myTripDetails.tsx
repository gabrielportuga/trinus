import color from 'color';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { FAB, useTheme } from 'react-native-paper';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { Events } from './events';
import { Informations } from './informations';
import overlay from './overlay';

const initialLayout = { width: Dimensions.get('window').width };

export const MyTripDetails = ({ navigation, route }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'events', title: 'Eventos' },
    { key: 'informations', title: 'Informações' },
  ]);

  const theme = useTheme();

  const renderScene = SceneMap({
    events: Events,
    informations: Informations,
  });

  const tabBarColor = theme.dark
    ? (overlay(4, theme.colors.surface) as string)
    : theme.colors.surface;

  const rippleColor = theme.dark
    ? color(tabBarColor).lighten(0.5)
    : color(tabBarColor).darken(0.2);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.primary }}
      style={{ backgroundColor: tabBarColor, shadowColor: theme.colors.text }}
      labelStyle={{ color: theme.colors.primary }}
      pressColor={rippleColor}
    />
  );


  useEffect(() => {
    console.log(route.params.tripId);
  }, []);

  return (
    <React.Fragment>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => console.log({ index })}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 50,
  },
})