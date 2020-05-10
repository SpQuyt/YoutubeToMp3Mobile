import React, { Component } from 'react';
import {
  View,
  FlatList,
  Keyboard,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Video from 'components/Home/MyYoutube/Video';
import { getVideosListDispatch } from 'datalayers/actions/video.action';
import { connect } from 'react-redux';
import { RESULTS_PER_PAGE } from 'constants/sizes';
import SearchBar from 'components/Common/SearchBar';
import styles from './index.styles';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
class MyYoutube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchLoading: false,
    };
  }

  componentDidMount() {
    // this.setState({ isLoading: true });
    // const { getVideosListDispatch } = this.props;
    // const queryString = '';
    // getVideosListDispatch(RESULTS_PER_PAGE, queryString)
    //   .then(res => {
    //     if (!res.success) {
    //       console.log(res.error);
    //     }
    //     this.setState({ isLoading: false });
    //   });
  }

  findVideo = (queryString) => {
    const { getVideosListDispatch } = this.props;
    this.setState({ isSearchLoading: true });
    Keyboard.dismiss();
    getVideosListDispatch(RESULTS_PER_PAGE, queryString)
      .then(res => {
        if (!res.success) {
          console.log(res.error);
        }
        this.setState({ isSearchLoading: false });
      });
  }

  render() {
    const { isSearchLoading } = this.state;
    const { videosList } = this.props;
    return (
      <DismissKeyboard>
        <View>
          <SearchBar
            isLoading={isSearchLoading}
            onFind={(queryString) => this.findVideo(queryString)}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(MyYoutube);
