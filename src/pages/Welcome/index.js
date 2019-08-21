import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

import Header from '~/components/Header';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Git Issues" iconDelete={false} iconBack={false} />
      </View>
    );
  }
}
