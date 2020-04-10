import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from 'components/Login';
import Home from 'components/Home';
import AuthLoading from 'components/AuthLoading';

const AppStack = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
      },
    },
    {
      headerMode: 'none',
    },
  ),
);

const AuthStack = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: Login,
      },
      Home: {
        screen: Home,
      },
    },
    {
      headerMode: 'none',
    },
  ),
);

const SwitchStack = createAppContainer(
  createSwitchNavigator({
    AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }),
);

export default SwitchStack;
