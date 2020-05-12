import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import SearchBar from 'components/Common/SearchBar';
import { SIZE_ICON_BUTTON } from 'constants/sizes';
import NavigationWithoutProps from 'utils/NavigationWithoutProps';
import Song from 'components/Home/MyMusic/MusicList/Song';
import { getOnDeviceSongsDispatch } from 'datalayers/actions/song.action';
import styles from './index.styles';

class OnDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isSearchLoading: false,
    };
  }

  componentDidMount() {
    const { onDeviceSongsList } = this.props;
    if (onDeviceSongsList.length === 0) {
      if (Platform.OS === 'android') {
        PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ])
          .then(() => {
            this.getSongsList();
          });
      } else {
        this.getSongsList();
      }
    } else {
      this.setState({ isLoading: false });
    }
  }

  findSong = (queryString) => {

  }

  getSongsList = () => {
    this.setState({ isLoading: true });
    const { getOnDeviceSongsDispatch } = this.props;
    getOnDeviceSongsDispatch()
      .then(res => {
        if (res.error) {
          this.setState({ isLoading: false });
          console.log(res);
        }
        this.setState({ isLoading: false });
      });
  }

  render() {
    const {
      isSearchLoading, isLoading,
    } = this.state;
    const { onDeviceSongsList } = this.props;
    return (
      <View style={styles.screen}>
        <View style={styles.navigationHeaderContainer}>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => NavigationWithoutProps.back()}
          >
            <Ionicons name="md-arrow-back" size={SIZE_ICON_BUTTON} color="black" />
          </TouchableOpacity>
          <Text style={styles.navigationHeaderText}>
            {'On device ('}
            {onDeviceSongsList.length}
            {')'}
          </Text>
        </View>
        <SearchBar
          isLoading={isSearchLoading}
          onFind={(queryString) => this.findSong(queryString)}
        />
        <View style={styles.buttonsListContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>Shuffle</Text>
            <Entypo name="shuffle" size={SIZE_ICON_BUTTON} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.getSongsList}
          >
            <Text style={styles.buttonText}>Refresh</Text>
            <Ionicons name="md-refresh" size={SIZE_ICON_BUTTON} color="black" />
          </TouchableOpacity>
        </View>
        {isLoading
          ? <ActivityIndicator />
          : (
            <FlatList
              style={styles.videoListContainer}
              data={onDeviceSongsList}
              extraData={onDeviceSongsList}
              keyExtractor={(item) => item.videoId}
              renderItem={({ item }) => (
                <Song
                  cover={item.cover}
                  author={item.author}
                  title={item.title}
                  fileName={item.fileName}
                  path={item.path}
                  duration={item.duration}
                />
              )}
              numColumns={1}
            />
          )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  onDeviceSongsList: state.song.onDeviceSongsList,
});

const mapDispatchToProps = {
  getOnDeviceSongsDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(OnDevice);
