import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { DetailedTrip } from './components/detailedTrip';
import { StackNavigatorParamlist } from './components/navigation/types';

type Props = {
  route: RouteProp<StackNavigatorParamlist, 'Details'>;
};

export const Details = (props: Props) => {
  return <DetailedTrip {...props.route.params} />;
};
