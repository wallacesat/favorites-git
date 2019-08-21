import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: repository.organization.avatar_url }} />
    <View style={styles.repositoryContent}>
      <Text style={styles.repositoryName}>{repository.name}</Text>
      <Text style={styles.organizationName}>{repository.organization.login}</Text>
    </View>
    <Icon name="chevron-right" size={16} style={styles.icon} />
  </View>
);

export default RepositoryItem;
