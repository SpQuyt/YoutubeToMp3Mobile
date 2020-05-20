import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './index.styles';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: '',
    };
  }

  render() {
    const { isLoading, onFind } = this.props;
    const { queryString } = this.state;
    return (
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
              onPress={() => onFind(queryString)}
            >
              <Text>Find</Text>
            </TouchableOpacity>
          )}
      </View>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
