import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { logoutGGDispatch } from 'datalayers/actions/auth.action';
import { connect } from 'react-redux';
import ytdl from 'react-native-ytdl';
import { RNFFmpeg } from 'react-native-ffmpeg';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';
import styles from './styles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdown: false,
    };
  }

  onLogOut = () => {
    const { logoutGGDispatch } = this.props;
    logoutGGDispatch()
      .then(res => {
        if (!res.success) {
          console.log(`Logout: ${res.error}`);
        }
      });
  }

  onTest = () => {
    // const { videoId, title } = this.props;
    const videoId = 'bA1MhSK8wBE';
    const title = 'Hoàng Thùy Linh - Kẻ Cắp Gặp Bà Già';
    // const { dirs } = RNFetchBlob.fs;
    const dirs = '/var/mobile/Media/iTunes_Control/Music/F00';
    // const dirs = RNFS.DocumentDirectoryPath;
    // const pathNotConverted = `${dirs.MainBundleDir}/${videoId}.mp3`;
    // const pathCompleted = `${dirs.MainBundleDir}/${title}.mp3`;
    const pathNotConverted = `${dirs}/${videoId}.mp3`;
    const pathCompleted = `${dirs}/${title}.mp3`;

    console.log(pathNotConverted);

    RNFS.exists(pathNotConverted)
      .then(res => {
        console.log(res);
      });
    // RNFS.exists(pathNotConverted)
    //   .then(isExisted => {
    //     console.log(isExisted);

    //     RNFS.exists(pathCompleted)
    //       .then(isExisted2 => {
    //         if (isExisted2) {
    //           RNFS.unlink(pathCompleted)
    //             .then(() => {
    //               console.log('FILE DELETED');
    //             });
    //           // Alert.alert(
    //           //   'Alert',
    //           //   'File already downloaded!',
    //           //   [
    //           //     {
    //           //       text: 'OK',
    //           //       style: 'cancel',
    //           //     },
    //           //   ],
    //           // );
    //         } else {
    //           ytdl.getInfo(videoId, (err, info) => {
    //             if (err) console.log(err);
    //             const format = ytdl.filterFormats(info.formats, 'audioonly');
    //             // const format = ytdl.chooseFormat(info.formats, { quallity: 'lowest' });

    //             RNFetchBlob
    //               .config({
    //                 path: pathNotConverted,
    //               })
    //               // .fetch('GET', format.url)
    //               // .fetch('GET', format[0].url)
    //               .fetch('GET', 'https://stream.2rap.vn/lofi_mp3/vietnam/rap/B-Ray/That_Duc_-_B_Ray.mp3')
    //               .progress({ interval: 10 }, (received, total) => {
    //                 console.log(`Downloading progress: ${Math.floor((received / total) * 100)}%...`);
    //               })
    //               .then(() => {
    //                 console.log('Donwload completed!');
    //                 // RNFFmpeg.executeWithArguments([
    //                 //   '-i',
    //                 //   pathNotConverted,
    //                 //   '-c:v',
    //                 //   'mp3',
    //                 //   '-id3v2_version', '4',
    //                 //   '-metadata', `title=${title}`,
    //                 //   '-metadata', `artist=${title}`,
    //                 //   pathCompleted,
    //                 // ])
    //                 //   .then(() => {
    //                 //     RNFS.unlink(pathNotConverted)
    //                 //       .then(() => {
    //                 //         console.log('FILE DELETED');
    //                 //       });
    //                 //   });
    //               })
    //               .catch((err) => {
    //                 console.log(err.message);
    //               });
    //           });
    //         }
    //       });
    //   });
  }

  render() {
    const { name, photo } = this.props;
    const { isDropdown } = this.state;

    return (
      <View style={styles.container}>
        {name === null
          ? <ActivityIndicator />
          : <View><Text style={styles.name}>{name}</Text></View>}
        <View style={styles.dropDownContainer}>
          {photo === null
            ? (
              <TouchableOpacity onPress={() => this.setState({ isDropdown: !isDropdown })}>
                <ActivityIndicator />
              </TouchableOpacity>
            )
            : (
              <TouchableOpacity onPress={() => this.setState({ isDropdown: !isDropdown })}>
                <Image style={styles.avatar} source={{ uri: photo }} />
              </TouchableOpacity>
            )
          }
          {isDropdown ? (
            <View style={styles.dropDownMenu}>
              <TouchableOpacity onPress={this.onTest}>
                <Text style={styles.dropDownItemText}>Test</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.auth.name,
  photo: state.auth.photo,
  email: state.auth.email,
});

const mapDispatchToProps = {
  logoutGGDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
