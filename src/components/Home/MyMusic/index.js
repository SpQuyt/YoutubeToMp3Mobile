import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { SIZE_ICON_BUTTON } from 'constants/sizes';
import NavigationWithoutProps from 'utils/NavigationWithoutProps';
import styles from './index.styles';

class MyMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.screen}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => NavigationWithoutProps.navigate('AllSongs')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}>
              <Ionicons name="ios-musical-notes" color="black" size={SIZE_ICON_BUTTON} />
            </View>
            <Text style={styles.buttonText}>All songs</Text>
          </View>
          <Ionicons name="ios-arrow-forward" color="black" size={SIZE_ICON_BUTTON} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => NavigationWithoutProps.navigate('OnDevice')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}>
              <Entypo name="mobile" color="black" size={SIZE_ICON_BUTTON} />
            </View>
            <Text style={styles.buttonText}>On device</Text>
          </View>
          <Ionicons name="ios-arrow-forward" color="black" size={SIZE_ICON_BUTTON} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => NavigationWithoutProps.navigate('MusicList', { nameRoute: 'Downloaded' })}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}>
              <Ionicons name="md-download" color="black" size={SIZE_ICON_BUTTON} />
            </View>
            <Text style={styles.buttonText}>Downloaded</Text>
          </View>
          <Ionicons name="ios-arrow-forward" color="black" size={SIZE_ICON_BUTTON} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MyMusic);
