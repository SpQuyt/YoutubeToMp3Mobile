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
    const {
      getOnDeviceSongsDispatch, onDeviceSongsList,
    } = this.props;
    if (onDeviceSongsList.length === 0) {
      getOnDeviceSongsDispatch()
        .then(res => {
          if (res.error) {
            console.log(res);
            this.setState({ isLoading: false });
          }
          this.setState({ isLoading: false });
        });
    } else {
      this.setState({ isLoading: false });
    }
  }

  findSong = (queryString) => {

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
