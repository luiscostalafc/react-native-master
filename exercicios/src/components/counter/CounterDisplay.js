import React from 'react';
import {Text} from 'react-native';

const CounterDisplay = (props) => {
  return (
    <>
      <Text>{props.num}</Text>
    </>
  );
};

export default CounterDisplay;
