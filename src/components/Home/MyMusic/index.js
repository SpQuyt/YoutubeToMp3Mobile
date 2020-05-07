import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './index.styles';

class MyMusic extends Component {
  static navigationOptions = {
    tabBarLabel: 'My Music',
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text>This is Music screen</Text>
      </View>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MyMusic);
