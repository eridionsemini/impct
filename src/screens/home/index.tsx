import React, {FC, ReactElement} from 'react';
import {SafeAreaView, View} from 'react-native';

import {ThemedText} from 'components';

import styles from './styles';

export const HomeScreen: FC = (): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ThemedText>Hello world</ThemedText>
      </View>
    </SafeAreaView>
  );
};
