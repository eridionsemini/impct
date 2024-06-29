import React, {FC, ReactElement} from 'react';
import {SafeAreaView, View} from 'react-native';

import {Logo, ThemedText} from 'components';

import styles from './styles';

export const HomeScreen: FC = (): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Logo />
        <ThemedText type="title">Hello world</ThemedText>
      </View>
    </SafeAreaView>
  );
};
