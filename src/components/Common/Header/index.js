import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getUserDispatch, logoutGGDispatch } from 'datalayers/actions/auth.action';
import { connect } from 'react-redux';
import styles from './index.styles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdown: false,
    };
  }

  componentDidMount() {
    const { getUserDispatch } = this.props;
    getUserDispatch()
      .then(res => {
        if (!res.success) {
          console.log(res.error);
        }
      });
  }

  onLogOut = () => {
    const { logoutDispatch } = this.props;
    logoutDispatch()
      .then(res => {
        if (!res.success) {
          console.log(res.error);
        }
      });
  }

  render() {
    const { name, photo } = this.props;
    const { isDropdown } = this.state;

    return (
      <View
        style={styles.container}
      >
        <View>
          <Text style={styles.name}>{name === null ? name : name.toUpperCase()}</Text>
        </View>
        <View style={styles.dropDownContainer}>
          <TouchableOpacity onPress={() => this.setState({ isDropdown: !isDropdown })}>
            <Image style={styles.avatar} source={{ uri: photo }} />
          </TouchableOpacity>
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
  getUserDispatch,
  logoutGGDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
