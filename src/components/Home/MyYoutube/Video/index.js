import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import ModalDownload from 'components/Home/MyYoutube/Modal/ModalDownload';
import { connect } from 'react-redux';
import ytdl from 'react-native-ytdl';
import { RNFFmpeg } from 'react-native-ffmpeg';
import RNFS from 'react-native-fs';
import styles from './index.styles';

class VideoAndroid extends Component {
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
      'Are you sure to download .mp3 file?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            const { videoId, title } = this.props;
            const { dirs } = RNFetchBlob.fs;
            if (Platform.OS === 'ios') {
              const pathNotConverted = `${dirs.DocumentDir}/${videoId}.mp3`;
              const pathCompleted = `${dirs.DocumentDir}/${title}.mp3`;
              this.performDownload(videoId, title, pathNotConverted, pathCompleted);
            } else if (Platform.OS === 'android') {
              PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              ])
                .then(() => {
                  const pathNotConverted = `${dirs.DownloadDir}/${videoId}.mp3`;
                  const pathCompleted = `${dirs.DownloadDir}/${title}.mp3`;
                  this.performDownload(videoId, title, pathNotConverted, pathCompleted);
                })
                .catch(err => {
                  console.log(err);
                  Alert.alert(err);
                });
            }
          },
        },
      ],
      { cancelable: true },
    );
  }

  performDownload = (videoId, title, pathNotConverted, pathCompleted) => {
    this.setState({ isModalDownloadVisible: true });

    RNFS.exists(pathCompleted)
      .then(isExisted => {
        if (isExisted) {
          this.setState({ isModalDownloadVisible: false });
          Alert.alert(
            'Alert',
            `File already downloaded! Path is: ${pathCompleted}`,
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
              .config({ path: pathNotConverted })
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
                        this.setState({ isConverting: false });
                        console.log('FILE NOT CONVERTED DELETED');
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

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(VideoAndroid);
