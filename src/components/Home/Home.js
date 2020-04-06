import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';

import RNFetchBlob from 'rn-fetch-blob';

import { GoogleSignin } from '@react-native-community/google-signin';
import styles from './styles';
import { YOUTUBE_API } from '../../constants/links';
import NavigationWithoutProps from '../../utils/NavigationWithoutProps';

class Home extends Component {
  findVideo = async () => {
    const { accessToken } = await GoogleSignin.getTokens();
    const result = await fetch(
      `${YOUTUBE_API.searchAPI}?part=snippet&maxResults=3&q=yasuo&key=AIzaSyCYNt2bAWvv3PI6p2XF60UqO_RltfDZtlE`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    const resultJSON = await result.json();
    console.log(resultJSON);
  }

  requestPermission = async () => {
    try {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);

      const videoID = 't3pYYI_A2vQ';
      const { dirs } = RNFetchBlob.fs;

      RNFetchBlob.config({
        // DCIMDir is in external storage
        path: `${dirs.DCIMDir}/${fileName}.mp3`,
      })
        .fetch('GET', 'http://192.168.1.84:3000/CHANAI.mp3')
        .progress({ interval: 10 }, (received, total) => {
          this.setState({ progress: Math.floor((received / total) * 100) });
        })
        .then(res => RNFetchBlob.fs.scanFile([{ path: res.path(), mime: 'audio' }]));
    } catch (err) {
      Alert.alert(err);
    }
  };

  onLogOut = async () => {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    NavigationWithoutProps.navigate('Auth');
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.requestPermission}>
          <Text>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onLogOut}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
