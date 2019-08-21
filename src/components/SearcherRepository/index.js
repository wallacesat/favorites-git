import React, { Component } from 'react';
import {
  View, TextInput, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class SearcherRepository extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      repositoryName: '',
      searchError: false,
    };
  }

  customStyleErrorInput = (ownStyle, error) => (error
    ? Object.assign({}, ...ownStyle, {
      borderWidth: 2,
      borderColor: '#E37A7A',
    })
    : ownStyle);

  render() {
    const { loading, repositoryName, searchError } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={this.customStyleErrorInput(styles.input, searchError)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Adicionar novo repositório"
          underlineColorAndroid="transparent"
          value={repositoryName}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => {}}>
          {loading ? (
            <ActivityIndicator size="small" color="#333" />
          ) : (
            <Icon name="plus" size={20} color="#333" />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
