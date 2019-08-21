import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';

import styles from './styles';

const deleteRepositories = async () => {
  await AsyncStorage.clear();
};

const backToInitialPage = async () => {
  const { navigation } = this.props;
  navigation.navigate('Welcome');
};

const Header = ({ iconBack = false, iconDelete = false, title }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    {iconBack ? (
      <TouchableOpacity onPress={backToInitialPage}>
        <Icon name="exchange" size={16} style={styles.iconBack} />
      </TouchableOpacity>
    ) : (
      <View style={styles.left} />
    )}
    <Text style={styles.title}>{title}</Text>
    {iconDelete ? (
      <TouchableOpacity onPress={deleteRepositories}>
        <Icon name="trash" size={16} style={styles.iconDelete} />
        <Text style={styles.iconText}>All</Text>
      </TouchableOpacity>
    ) : (
      <View style={styles.left} />
    )}
  </View>
);

Header.propTypes = {
  iconBack: PropTypes.bool.isRequired,
  iconDelete: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(Header);
