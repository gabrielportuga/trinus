import * as Google from 'expo-google-app-auth';
import React, { memo } from 'react';
import Background from '../shared/Background';
import Button from '../shared/Button';
import Header from '../shared/Header';
import Logo from '../shared/Logo';
import Paragraph from '../shared/Paragraph';
import { Navigation } from '../navigation/types';
import { saveSecureStore } from '../../service/secureStore';

type Props = {
  navigation: Navigation;
};

const ChooseLogin = ({ navigation }: Props) => {
  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId: "470111710300-14ek9pl9nbc3o5a3tt33t1dqugoe86qb.apps.googleusercontent.com",
        iosClientId: "470111710300-m7q4dte7etbjr2dsnkuivfpbiulrich5.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        console.log(result.user);

        saveSecureStore("user", JSON.stringify(result.user));

        navigation.navigate('FeedList');
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  return (
    < Background >
      <Logo />
      <Paragraph>
        The easiest way to schedule your next trip.
        </Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
        Login
        </Button>

      <Button mode="contained" color='#DB4437' onPress={signInWithGoogleAsync}>
        Login with Google
        </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
        </Button>
    </Background >
  )
};


export default memo(ChooseLogin);
