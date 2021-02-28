import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

const CounterButton = (props) => {
  return (
    <>
      <View style={style.container}>
        <Button style={style.custonButton} title="+" onPress={props.inc} />
        <Button style={style.custonButton} title="-" onPress={props.dec} />
      </View>
    </>
  );
};

export default CounterButton;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  custonButton: {
    padding: 20,
  },
});
