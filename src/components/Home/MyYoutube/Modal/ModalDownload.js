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
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text}>
                Downloading:
                {' '}
              </Text>
              <Text style={styles.text}>
                {progressDownload}
                %
              </Text>
            </View>
            {
            progressDownload !== 100
              ? <View />
              : (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.text}>
                    Processing:
                    {' '}
                  </Text>
                  {isConverting ? <ActivityIndicator /> : <Text style={styles.text}>100%</Text>}
                </View>
              )
          }
          </View>
          {
            progressDownload === 100 && !isConverting
              ? (
                <TouchableOpacity style={styles.modalConfirmButton} onPress={closeModal}>
                  <Text style={styles.modalConfirmButtonText}>OK</Text>
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
