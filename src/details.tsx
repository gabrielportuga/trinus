import React from 'react';
import { DetailedTrip } from './components/detailedTrip';


export const Details = ({ navigation, route }) => {
  return <DetailedTrip {...{navigation: navigation, route: route}} />;
};
