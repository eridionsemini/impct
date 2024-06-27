import React, {FC, ReactElement} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import styles from './styles';

export const HomeScreen: FC = (): ReactElement => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text>Hello world</Text>
    </View>
  </SafeAreaView>
);
