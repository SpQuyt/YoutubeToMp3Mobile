import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import ModalDownload from 'components/Home/MyYoutube/Modal/ModalDownload';
import { connect } from 'react-redux';
import ytdl from 'react-native-ytdl';
import { RNFFmpeg } from 'react-native-ffmpeg';
import RNFS from 'react-native-fs';
import styles from './index.styles';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressDownload: 0,
      isModalDownloadVisible: false,
      isConverting: false,
    };
  }

  onPerformDownload = () => {
    Alert.alert(
      'Alert',
      'Are you sure to download this .mp3 file?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Continue',
          onPress: () => {
            PermissionsAndroid.requestMultiple([
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            ])
              .then(this.performDownload)
              .catch(err => {
                console.log(err);
                Alert.alert(err);
              });
          },
        },
      ],
      { cancelable: true },
    );
  }

  performDownload = () => {
    this.setState({ isModalDownloadVisible: true });
    const { videoId, title } = this.props;
    const { dirs } = RNFetchBlob.fs;
    const pathNotConverted = `${dirs.DownloadDir}/${videoId}.mp3`;
    const pathCompleted = `${dirs.DownloadDir}/${title}.mp3`;

    RNFS.exists(pathCompleted)
      .then(isExisted => {
        if (isExisted) {
          this.setState({ isModalDownloadVisible: false });
          Alert.alert(
            'Alert',
            'File already downloaded!',
            [
              {
                text: 'OK',
                style: 'cancel',
              },
            ],
          );
        } else {
          ytdl.getInfo(videoId, (err, info) => {
            if (err) console.log(err);
            const format = ytdl.filterFormats(info.formats, 'audioonly');

            RNFetchBlob
              .config({
                path: pathNotConverted,
              })
              .fetch('GET', format[0].url)
              .progress({ interval: 10 }, (received, total) => {
                console.log(`Downloading progress: ${Math.floor((received / total) * 100)}%...`);
                this.setState({ progressDownload: Math.floor((received / total) * 100) });
              })
              .then(() => {
                this.setState({
                  progressDownload: 100,
                  isConverting: true,
                });
                RNFFmpeg.executeWithArguments([
                  '-i',
                  pathNotConverted,
                  '-c:v',
                  'mp3',
                  '-id3v2_version', '4',
                  '-metadata', `title=${title}`,
                  '-metadata', `artist=${title}`,
                  pathCompleted,
                ])
                  .then(() => {
                    RNFetchBlob.fs.scanFile([{ path: pathCompleted, mime: 'audio' }]);
                    RNFS.unlink(pathNotConverted)
                      .then(() => {
                        this.setState({
                          isConverting: false,
                        });
                        console.log('FILE DELETED');
                      });
                  });
              })
              .catch((err) => {
                console.log(err.message);
              });
          });
        }
      });
  }

  render() {
    const {
      title, description, thumbnail,
    } = this.props;
    const {
      isModalDownloadVisible, isConverting, progressDownload,
    } = this.state;
    return (
      <TouchableOpacity
        onPress={this.onPerformDownload}
        style={styles.videoContainer}
      >
        <ModalDownload
          isModalDownloadVisible={isModalDownloadVisible}
          isConverting={isConverting}
          progressDownload={progressDownload}
          closeModal={() => { this.setState({ isModalDownloadVisible: false }); }}
        />
        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        <View style={styles.textContainer}>
          <Text style={styles.titleText} numberOfLines={2}>{title}</Text>
          <Text style={styles.descriptionText} numberOfLines={7}>{description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.auth.name,
  photo: state.auth.photo,
  email: state.auth.email,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Video);
