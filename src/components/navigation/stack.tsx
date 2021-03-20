import { DrawerNavigationProp } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Appbar, IconButton, useTheme } from 'react-native-paper';
import { Details } from '../../details';
import { MyTripDetails } from '../../myTripDetails';
import { CreateTrip } from '../createTrip';
import { CreateTripEvent } from '../createTripEvent';
import ChooseLogin from '../login/ChooseLogin';
import ForgotPasswordScreen from '../login/ForgotPasswordScreen';
import HomeScreen from '../login/HomeScreen';
import LoginScreen from '../login/LoginScreen';
import RegisterScreen from '../login/RegisterScreen';
import { BottomTabs } from './bottomTabs';
import { StackNavigatorParamlist } from './types';

const Stack = createStackNavigator<StackNavigatorParamlist>();

export const StackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      headerMode="screen"

      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
                ? options.title
                : scene.route.name;

          return (
            <Appbar.Header
              theme={{ colors: { primary: theme.colors.surface } }}
            >
              {previous && scene.route.name !== "FeedList" ? (
                <Appbar.BackAction
                  onPress={navigation.goBack}
                  color={theme.colors.primary}
                />
              ) : (
                  <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => {
                      ((navigation as any) as DrawerNavigationProp<{}>).openDrawer();
                    }}
                  >

                    <IconButton
                      size={30}
                      style={{ marginLeft: -10 }}
                      icon="menu"
                      color={theme.colors.primary}
                    />
                    {/* <Avatar.Image
                      size={40}
                      source={{
                        uri:
                          '',
                      }}
                    /> */}
                  </TouchableOpacity>
                )}
              <Appbar.Content
                title={
                  // title === 'Feed' ? (
                  //   <MaterialCommunityIcons
                  //     style={{ margin: 'center' }}
                  //     name="wallet-travel"
                  //     size={40}
                  //     color={theme.colors.primary}
                  //   />
                  // ) : (
                  title
                  // )
                }
                titleStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: theme.colors.primary,
                  textAlign: 'center',
                  marginLeft: -70,
                }}
              />
            </Appbar.Header>
          );
        },
      }}
    >
      <Stack.Screen
        name="FeedList"
        component={BottomTabs}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Trip around';
          return { headerTitle: routeName };
        }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Details' }}
      />

      <Stack.Screen
        name="MyTripDetails"
        component={MyTripDetails}
        options={{ headerTitle: 'My Trip Details' }}
      />

      <Stack.Screen
        name="CreateTrip"
        component={CreateTrip}
        options={{ headerTitle: 'Create Trip' }}
      />

      <Stack.Screen
        name="CreateTripEvent"
        component={CreateTripEvent}
        options={{ headerTitle: 'Create Event' }}
      />

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ChooseLogin"
        component={ChooseLogin}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};
