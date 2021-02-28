import React from 'react';
import {Button} from 'react-native';

const Children = (props) => {
  function randowNumber(min, max) {
    const factory = max - min + 1;
    return parseInt(Math.random() * factory) + min;
  }

  return (
    <Button
      title="Run"
      onPress={function () {
        const n = randowNumber(props.min, props.max);
        props.funcao(n, 'O valor é: ');
      }}
    />
  );
};

export default Children;
