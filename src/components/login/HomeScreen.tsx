import { useFocusEffect } from '@react-navigation/native';
import React, { memo } from 'react';
import Background from '../shared/Background';
import Header from '../shared/Header';
import Logo from '../shared/Logo';
import Paragraph from '../shared/Paragraph';
import { Navigation } from '../navigation/types';
import { getSecureStore, User } from '../../service/secureStore';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => {
  const getUser = async () => {
    return getSecureStore("user");
  };

  useFocusEffect(() => {
    const user: Promise<User> = getUser();
    user.then((res) => {
      if (res) {
        navigation.navigate('FeedList');
      }
      else {
        navigation.navigate('ChooseLogin');
      }
    })

  });

  return (
    < Background >
      <Logo />
      <Paragraph>
        The easiest way to schedule your next trip.
      </Paragraph>
    </ Background>
  );
};


export default memo(HomeScreen);
