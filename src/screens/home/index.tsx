import React, {FC, ReactElement} from 'react';
import {SafeAreaView, View} from 'react-native';

import {Logo, ThemedText} from 'components';

import styles from './styles';
import {HomeScreenProps} from './types';

export const HomeScreen: FC<HomeScreenProps> = ({navigation}): ReactElement => {
  console.log('navigation', navigation);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Logo />
        <ThemedText type="title">Hello world</ThemedText>
      </View>
    </SafeAreaView>
  );
};
