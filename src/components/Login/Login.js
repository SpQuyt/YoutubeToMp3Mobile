import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { loginGGDispatch } from 'datalayers/actions/auth.action';
import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  onGGSignIn = () => {
    this.setState({ isLoading: true });
    const { loginGGDispatch } = this.props;
    loginGGDispatch()
      .then(res => {
        if (!res.success) {
          console.log(res.error);
        }
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.screen}>
        {isLoading
          ? <ActivityIndicator />
          : (
            <TouchableOpacity style={styles.button} onPress={this.onGGSignIn}>
              <Text style={styles.buttonText}>Login Google</Text>
            </TouchableOpacity>
          )
        }
      </View>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = {
  loginGGDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
