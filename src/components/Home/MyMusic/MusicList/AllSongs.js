import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import SearchBar from 'components/Common/SearchBar';
import { SIZE_ICON_BUTTON } from 'constants/sizes';
import NavigationWithoutProps from 'utils/NavigationWithoutProps';
import Song from 'components/Home/MyMusic/MusicList/Song';
import { getAllSongsDispatch } from 'datalayers/actions/song.action';
import styles from './index.styles';

class AllSongs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isSearchLoading: false,
    };
  }

  componentDidMount() {
    const {
      getAllSongsDispatch, allSongsList,
    } = this.props;
    if (allSongsList.length === 0) {
      getAllSongsDispatch()
        .then(res => {
          if (res.error) {
            this.setState({ isLoading: false });
            console.log(res);
          }
          this.setState({ isLoading: false });
        });
    } else {
      this.setState({ isLoading: false });
    }
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

  render() {
    const {
      isSearchLoading, isLoading,
    } = this.state;
    const { allSongsList } = this.props;
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
            {'All songs ('}
            {allSongsList.length}
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
              data={allSongsList}
              extraData={allSongsList}
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
  allSongsList: state.song.allSongsList,
});

const mapDispatchToProps = {
  getAllSongsDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllSongs);
