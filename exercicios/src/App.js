import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import First from './components/First';

const App = () => {
  return (
    <>
      <SafeAreaView style={style.container}>
        <First max={100} min={10} />
        <First max={50} min={8} />
      </SafeAreaView>
    </>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
