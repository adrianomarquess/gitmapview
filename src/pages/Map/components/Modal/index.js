import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import Modal from 'react-native-modal';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUser, modalState } from 'redux/ducks/map';

import styles from './styles';

class ModalComponent extends Component {
  static propTypes = {
    modalState: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired,
    modalVisible: PropTypes.bool.isRequired,
    coordinate: PropTypes.shape({}).isRequired,
  };

  state = {
    userName: '',
  }

  addNewUser = () => {
    this.props.modalState(false);

    const user = {
      login: this.state.userName,
      coordinate: this.props.coordinate,
    };

    this.props.addUser(user);
    this.setState({ userName: '' });
  };

  render() {
    // AsyncStorage.clear();
    return (
      <Modal style={styles.modal} isVisible={this.props.modalVisible} >
        <View style={styles.modalContainer} >
          <Text style={styles.modalTitle}>Adicionar um novo local</Text>

          <TextInput
            placeholder="Usuário no Github"
            style={styles.input}
            autoCorrect={false}
            autoFocus
            autoCapitalize="none"
            value={this.state.userName}
            onChangeText={text => this.setState({ userName: text })}
          />

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.buttonSecondary]}
              onPress={() => this.props.modalState(false)}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonPrimary]}
              onPress={this.addNewUser}
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modalVisible: state.map.modalVisible,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ addUser, modalState }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
