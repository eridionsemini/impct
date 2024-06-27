import React, {ReactElement, FC} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import styles from './styles';

export const HomeScreen: FC = (): ReactElement => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text>Hello world</Text>
    </View>
  </SafeAreaView>
);
