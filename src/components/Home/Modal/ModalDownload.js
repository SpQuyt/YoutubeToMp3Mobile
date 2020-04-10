import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

class ModalDownload extends Component {
  render() {
    const {
      isModalDownloadVisible, progressDownload, isConverting, closeModal,
    } = this.props;
    return (
      <Modal isVisible={isModalDownloadVisible}>
        <View style={styles.modal}>
          <View style={{ flexDirection: 'row' }}>
            <Text>
              Downloading .mp3 file:
              {' '}
            </Text>
            {progressDownload !== 100
              ? (
                <Text>
                  {progressDownload}
                  {' '}
                  %
                </Text>
              )
              : <Text>Completed!</Text>}
          </View>

          {
            progressDownload !== 100
              ? <View />
              : (
                <View style={{ flexDirection: 'row' }}>
                  <Text>
                    Processing this .mp3 file:
                    {' '}
                  </Text>
                  {isConverting ? <ActivityIndicator /> : <Text>Completed!</Text>}
                </View>
              )
          }
          {
            progressDownload === 100 && !isConverting
              ? (
                <TouchableOpacity style={styles.modalConfirmButton} onPress={closeModal}>
                  <Text>OK</Text>
                </TouchableOpacity>
              )
              : <View />
          }
        </View>
      </Modal>
    );
  }
}

export default ModalDownload;
