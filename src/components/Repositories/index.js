import React from 'react';

import { View, Text, FlatList } from 'react-native';

import Repository from './RepositoryItem';
import styles from './styles';

const renderListItem = ({ item }) => <Repository repository={item} />;

const renderList = (data, refreshing, loadRepositories) => (
  <FlatList
    data={data}
    keyExtractor={(item) => String(item.id)}
    renderItem={renderListItem}
    onRefresh={loadRepositories}
    refreshing={refreshing}
  />
);

const Repositories = ({ refreshing = false, data = [], loadRepositories }) => (
  <View style={styles.container}>
    {!data ? (
      <Text syle={styles.textEmptyRepositories}>Nenhum repositório foi adicionado ainda</Text>
    ) : (
      renderList(data, refreshing, loadRepositories)
    )}
  </View>
);

export default Repositories;
