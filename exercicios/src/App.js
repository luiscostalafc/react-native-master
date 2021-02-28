import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

//import First from './components/First';
//import Father from './components/Father';
//import CounterV2 from './components/counter/CounterV2';
import ProductsListExample from './components/listProducts/ProductsListExample';

const App = () => {
  return (
    <>
      <SafeAreaView style={style.container}>
        <ProductsListExample />
        {/* <CounterV2 /> */}
        {/* <First max={100} min={10} />
        <First max={50} min={8} /> */}
        {/* <Father min={10} max={60} /> */}
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
