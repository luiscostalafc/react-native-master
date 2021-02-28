import React, {useState} from 'react';
import {Text} from 'react-native';
import Children from '../components/Children';

const Father = (props) => {
  const [num, setNum] = useState(0);
  const [text, setText] = useState('');

  function ShowValue(number, text) {
    setNum(number);
    setText(text);
  }

  return (
    <>
      <Text>
        {text}
        {num}
      </Text>
      <Children min={1} max={60} funcao={ShowValue} />
    </>
  );
};

export default Father;
