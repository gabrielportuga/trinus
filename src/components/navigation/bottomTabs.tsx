import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { getFocusedRouteNameFromRoute, RouteProp, useIsFocused } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import color from 'color';
import React from 'react';
import { Dialog, FAB, Paragraph, Portal, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feed } from '../../feed';
import { Message } from '../../message';
import { MyTrip } from '../../myTrip';
import overlay from '../../overlay';
import { StackNavigatorParamlist } from './types';

const Tab = createMaterialBottomTabNavigator();

type Props = {
  route: RouteProp<StackNavigatorParamlist, 'FeedList'>;
  navigation?: StackNavigationProp<StackNavigatorParamlist>;
};

export const BottomTabs = (props: Props) => {
  const routeName = getFocusedRouteNameFromRoute(props.route) ?? 'Feed';

  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();

  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);

  let icon = 'feather';

  switch (routeName) {
    case 'Messages':
      icon = 'email-plus-outline';
      break;
    default:
      icon = 'feather';
      break;
  }

  const tabBarColor = theme.dark
    ? (overlay(6, theme.colors.surface) as string)
    : theme.colors.surface;

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Trip around"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text)
          .alpha(0.6)
          .rgb()
          .string()}
        sceneAnimationEnabled={false}
      >
        <Tab.Screen
          name="Trip around"
          component={Feed}
          options={{
            tabBarIcon: 'home-account',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="My Trips"
          component={MyTrip}
          options={{
            tabBarIcon: 'bag-personal-outline',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Message}
          options={{
            tabBarIcon: 'message-text-outline',
            tabBarColor,
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused}
          icon={icon}
          style={{
            position: 'absolute',
            bottom: insets.bottom + 65,
            right: 16,
          }}
          color="white"
          theme={{
            colors: {
              accent: theme.colors.primary,
            },
          }}
          onPress={() => {
            props.navigation &&
            props.navigation.push('CreateTrip')
          }}
        />

        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>This is a title</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </React.Fragment>
  );
};
