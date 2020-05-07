import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Login from 'components/Login';
import AuthLoading from 'components/AuthLoading';
import MyMusic from 'components/Home/MyMusic';
import MyYoutube from 'components/Home/MyYoutube';
import {
  SIZE_TEXT_NORMAL, SIZE_ICON_TABBAR, TABBAR_HEIGHT,
} from 'constants/sizes';
import Header from 'components/Common/Header';
import React from 'react';
import { COLOR_YOUTUBE, COLOR_TABBAR } from 'constants/colors';
import Feather from 'react-native-vector-icons/Feather';

const HomeStack = createMaterialTopTabNavigator({
  MyMusic: {
    screen: MyMusic,
  },
  MyYoutube: {
    screen: MyYoutube,
  },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'MyMusic') {
        iconName = 'music';
      } else if (routeName === 'MyYoutube') {
        iconName = 'youtube';
      }
      return <Feather name={iconName} size={SIZE_ICON_TABBAR} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: COLOR_YOUTUBE,
    inactiveTintColor: 'gray',
    allowFontScaling: true,
    showIcon: true,
    indicatorStyle: {
      backgroundColor: COLOR_YOUTUBE,
    },
    labelStyle: {
      fontSize: SIZE_TEXT_NORMAL,
      fontWeight: 'bold',
    },
    style: {
      backgroundColor: COLOR_TABBAR,
      height: TABBAR_HEIGHT,
    },
  },
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  initialRouteName: 'MyMusic',
});

const AppStack = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: HomeStack,
        navigationOptions: {
          header: () => <Header />,
        },
      },
    },
  ),
);

const SwitchStack = createAppContainer(
  createSwitchNavigator({
    AuthLoading,
    App: AppStack,
    Auth: Login,
  },
  {
    initialRouteName: 'AuthLoading',
  }),
);

export default SwitchStack;
