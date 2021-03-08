import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { CreateTrip } from './components/createTrip';
import { StackNavigatorParamlist } from './navigation/types';

type Props = {
  route: RouteProp<StackNavigatorParamlist, 'CreateTrip'>;
};

export const Trip = (props: Props) => {
  return <CreateTrip />;
};
