import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import MusicFiles from 'react-native-get-music-files';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import SearchBar from 'components/Common/SearchBar';
import { SIZE_ICON_BUTTON } from 'constants/sizes';
import NavigationWithoutProps from 'utils/NavigationWithoutProps';
import Song from 'components/Home/MyMusic/MusicList/Song';
import styles from './index.styles';

class MusicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isSearchLoading: false,
      nameRoute: '',
      songs: [],
    };
  }

  componentDidMount() {
    const { songs } = this.state;
    const { navigation } = this.props;
    this.setState({ nameRoute: navigation.getParam('nameRoute') });
    // if (songs.length === 0) this.getAllMusicFiles();
    // PermissionsAndroid.requestMultiple([
    //   PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    //   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    // ])
    //   .then(() => )
    //   .catch(err => {
    //     console.log(err);
    //     Alert.alert(err);
    //   });
  }

  findSong = (queryString) => {

  }

  getAllMusicFiles = () => {
    MusicFiles.getAll({
      blured: true,
      artist: true,
      duration: true,
      genre: true,
      title: true,
      cover: true,
      minimumSongDuration: 10000,
    })
      .then(res => {
        this.setState({ isLoading: false });
        console.log(res);
        this.setState({ songs: res });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const {
      songs, isSearchLoading, isLoading, nameRoute,
    } = this.state;
    return (
      <View style={styles.screen}>
        <View style={styles.navigationHeaderContainer}>
          <TouchableOpacity onPress={() => NavigationWithoutProps.back()}>
            <Ionicons name="md-arrow-back" size={SIZE_ICON_BUTTON} color="black" />
          </TouchableOpacity>
          <Text style={styles.navigationHeaderText}>
            {nameRoute}
            {' ('}
            {songs.length}
            {')'}
          </Text>
        </View>
        <SearchBar
          isLoading={isSearchLoading}
          onFind={(queryString) => this.findSong(queryString)}
        />
        <TouchableOpacity
          style={styles.shuffleButtonContainer}
          onPress={() => {}}
        >
          <Text style={styles.shuffleButtonText}>Shuffle</Text>
          <Entypo name="shuffle" size={SIZE_ICON_BUTTON} color="black" />
        </TouchableOpacity>
        {isLoading
          ? <ActivityIndicator />
          : (
            <FlatList
              style={styles.videoListContainer}
              data={songs}
              extraData={songs}
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

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MusicList);
