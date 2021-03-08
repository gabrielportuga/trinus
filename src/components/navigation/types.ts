export type StackNavigatorParamlist = {
  FeedList: undefined;
  Details: {
    id: number;
    name: string;
    handle: string;
    date: string;
    content: string;
    image: string;
    avatar: string;
    comments: number;
    retweets: number;
    hearts: number;
  };
  CreateTrip: undefined;
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
