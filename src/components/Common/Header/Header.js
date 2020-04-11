import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { logoutGGDispatch } from 'datalayers/actions/auth.action';
import { connect } from 'react-redux';
import styles from './styles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdown: false,
    };
  }

  onLogOut = () => {
    const { logoutGGDispatch } = this.props;
    logoutGGDispatch()
      .then(res => {
        if (!res.success) {
          console.log(`Logout: ${res.error}`);
        }
      });
  }

  render() {
    const { name, photo } = this.props;
    const { isDropdown } = this.state;

    return (
      <View style={styles.container}>
        {name === null
          ? <ActivityIndicator />
          : <View><Text style={styles.name}>{name}</Text></View>}
        <View style={styles.dropDownContainer}>
          {photo === null
            ? (
              <TouchableOpacity onPress={() => this.setState({ isDropdown: !isDropdown })}>
                <ActivityIndicator />
              </TouchableOpacity>
            )
            : (
              <TouchableOpacity onPress={() => this.setState({ isDropdown: !isDropdown })}>
                <Image style={styles.avatar} source={{ uri: photo }} />
              </TouchableOpacity>
            )
          }
          {isDropdown ? (
            <View style={styles.dropDownMenu}>
              <TouchableOpacity onPress={this.onLogOut}>
                <Text style={styles.dropDownItemText}>Logout</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.auth.name,
  photo: state.auth.photo,
  email: state.auth.email,
});

const mapDispatchToProps = {
  logoutGGDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
