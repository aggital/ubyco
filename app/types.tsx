/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  Auth: undefined;
  NotFound: undefined;
};

export type AuthParamList = {
  LoginScreen : undefined;
  SignUpScreen: undefined;
  VerifyScreen: undefined;
};

export type AuthTabParamList = {
  Login: undefined;
  SignUp: undefined;
  Verify: undefined;
};

export type DrawerTabParamList = {
  Home: undefined;
  toggleDrawer: undefined
}

export type HeaderParamList = {
  name: string;
}

export type HomeParamList = {
  HomeScreen: undefined;
  GiftCardScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
