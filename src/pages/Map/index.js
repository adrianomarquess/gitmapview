import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image, ScrollView } from 'react-native';
import MapView from 'react-native-maps';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { modalState } from 'redux/ducks/map';

import Modal from './components/Modal';

import styles from './styles';

class Map extends Component {
  static propTypes = {
    modalState: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      login: PropTypes.string,
      bio: PropTypes.string,
      avatar_url: PropTypes.string,
      coordinate: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }).isRequired,
    })).isRequired,
  };

  state = {
    coordinate: {},
  }

  setCoordinates = (e) => {
    const { coordinate } = e.nativeEvent;
    this.setState({ coordinate });

    this.props.modalState(true);
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal coordinate={this.state.coordinate} />

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -23.553835,
            longitude: -46.837509,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
          onLongPress={this.setCoordinates}
        >
          { this.props.users.map(user => (
            <MapView.Marker
              key={user.id}
              coordinate={user.coordinate}
              title={user.login}
              description={user.bio}
            >
              <Image style={styles.marker} source={{ uri: user.avatar_url }} />
            </MapView.Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.map.users,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ modalState }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
