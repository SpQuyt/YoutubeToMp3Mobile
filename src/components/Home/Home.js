import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Keyboard,
} from 'react-native';

import Header from 'components/Common/Header';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Video from 'components/Home/Video';
import { getVideosListDispatch } from 'datalayers/actions/video.action';
import { connect } from 'react-redux';
import { RESULTS_PER_PAGE } from 'constants/sizes';
import styles from './styles';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      queryString: '',
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const { getVideosListDispatch } = this.props;
    const queryString = '';
    getVideosListDispatch(RESULTS_PER_PAGE, queryString)
      .then(res => {
        if (!res.success) {
          console.log(res.error);
        }
        this.setState({ isLoading: false });
      });
  }

  findVideo = () => {
    const { queryString } = this.state;
    const { getVideosListDispatch } = this.props;
    this.setState({ isLoading: true });
    Keyboard.dismiss();
    getVideosListDispatch(RESULTS_PER_PAGE, queryString)
      .then(res => {
        if (!res.success) {
          console.log(res.error);
        }
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { isLoading, queryString } = this.state;
    const { videosList } = this.props;
    return (
      <DismissKeyboard>
        <View>
          <Header />
          <View style={styles.searchBarContainer}>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={styles.searchBar}
                placeholder="Enter keyword here..."
                value={queryString}
                onChangeText={(text) => { this.setState({ queryString: text }); }}
              />
              <TouchableOpacity
                onPress={() => { this.setState({ queryString: '' }); }}
                style={styles.cancelButtonContainer}
              >
                <Text>X</Text>
              </TouchableOpacity>
            </View>
            {isLoading
              ? <ActivityIndicator />
              : (
                <TouchableOpacity
                  style={styles.findButton}
                  onPress={this.findVideo}
                >
                  <Text>Find</Text>
                </TouchableOpacity>
              )}
          </View>
          {videosList.length === 0 || videosList[0] === undefined
            ? <View />
            : (
              <FlatList
                style={styles.videoListContainer}
                data={videosList}
                extraData={videosList}
                keyExtractor={(item) => item.videoId}
                renderItem={({ item }) => (
                  <Video
                    title={item.title}
                    description={item.description}
                    thumbnail={item.thumbnail}
                    videoId={item.videoId}
                  />
                )}
                numColumns={1}
              />
            )
        }
        </View>
      </DismissKeyboard>
    );
  }
}

const mapStateToProps = (state) => ({
  videosList: state.video.videosList,
});

const mapDispatchToProps = {
  getVideosListDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
