import { Trip } from "../../models/trip";

export type StackNavigatorParamlist = {
  FeedList: undefined;
  Details: undefined;
  CreateTrip: Trip;
  MyTripDetails: undefined;
  CreateTripEvent: undefined;
  HomeScreen: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined;
  Events: undefined;
  ChooseLogin: undefined;
};

export type Navigation = {
  navigate: (scene: string) => void;
};
