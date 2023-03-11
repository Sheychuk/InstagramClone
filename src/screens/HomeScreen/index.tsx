import React from 'react';
import {SafeAreaView} from 'react-native';
import Feed from '../../components/Feed';

function HomeScreen(): JSX.Element {
  return (
    <SafeAreaView>
      <Feed />
    </SafeAreaView>
  );
}

export default HomeScreen;
