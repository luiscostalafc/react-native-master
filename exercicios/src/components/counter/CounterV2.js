import React, {useState} from 'react';
import {Text} from 'react-native';
import CounterDisplay from './CounterDisplay';
import CounterButton from './CounterButton';

const CounterV2 = () => {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <>
      <Text>Contador</Text>
      <CounterDisplay num={num} />
      <CounterButton inc={inc} dec={dec} />
    </>
  );
};

export default CounterV2;
