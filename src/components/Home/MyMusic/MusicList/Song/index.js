import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './index.styles';

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      album, author, blur, cover, duration, fileName, genre, path, title,
    } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={styles.songContainer}
      >
        {cover === undefined || cover === null
          ? <Image style={styles.cover} source={require('assets/logo.png')} />
          : <Image style={styles.cover} source={{ uri: cover }} />}
        <View style={styles.textContainer}>
          {title === undefined || title === null
            ? <Text style={styles.titleText} ellipsizeMode="tail" numberOfLines={1}>{fileName}</Text>
            : <Text style={styles.titleText} ellipsizeMode="tail" numberOfLines={1}>{title}</Text>}
          <Text style={styles.authorText} ellipsizeMode="tail" numberOfLines={1}>{author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Song);
