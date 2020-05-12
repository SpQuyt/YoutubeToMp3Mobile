import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Login from 'components/Home/MyYoutube/Login';
import AuthLoading from 'components/Home/MyYoutube/AuthLoading';
import MyMusic from 'components/Home/MyMusic';
import MyYoutube from 'components/Home/MyYoutube';
import {
  SIZE_TEXT_NORMAL, SIZE_ICON_TABBAR, TABBAR_HEIGHT,
} from 'constants/sizes';
import Header from 'components/Common/Header';
import React from 'react';
import { COLOR_YOUTUBE, COLOR_TABBAR } from 'constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import AllSongs from 'components/Home/MyMusic/MusicList/AllSongs';
import OnDevice from 'components/Home/MyMusic/MusicList/OnDevice';

const SongStack = createStackNavigator({
  MyMusic: {
    screen: MyMusic,
    navigationOptions: {
      header: () => <Header />,
    },
  },
  AllSongs: {
    screen: AllSongs,
    navigationOptions: {
      header: () => <Header />,
    },
  },
  OnDevice: {
    screen: OnDevice,
    navigationOptions: {
      header: () => <Header />,
    },
  },
}, {
  navigationOptions: {
    tabBarLabel: 'My Music',
  },
});

const YoutubeStack = createStackNavigator({
  MyYoutube: {
    screen: MyYoutube,
    navigationOptions: {
      header: () => <Header />,
    },
  },
}, {
  navigationOptions: {
    tabBarLabel: 'My Youtube',
  },
});

const SwitchStack = createSwitchNavigator({
  AuthLoading: {
    screen: AuthLoading,
  },
  YoutubeStack: {
    screen: YoutubeStack,
    navigationOptions: {
      header: () => <Header />,
    },
  },
  Auth: {
    screen: Login,
  },
},
{
  initialRouteName: 'AuthLoading',
});

const HomeStack = createAppContainer(
  createMaterialTopTabNavigator(
    {
      MyYoutube: {
        screen: SwitchStack,
        navigationOptions: {
          tabBarLabel: 'My Youtube',
        },
      },
      MyMusic: {
        screen: SongStack,
        navigationOptions: {
          tabBarLabel: 'My Songs',
        },
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
    },
  ),
);

export default HomeStack;
