import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const First = ({max, min}) => {
  const numberRandom = Math.random() * (max - min) + min;
  console.warn(numberRandom);

  return (
    <>
      <View>
        <Text style={style.container}>
          O número máximo é {max ?? 'Preencha o valor máximo:'} e o mínimo é{' '}
          {min ?? 'Preencha o valor mínimo:'}
        </Text>
      </View>
    </>
  );
};

export default First;

const style = StyleSheet.create({
  container: {
    fontSize: 30,
    marginTop: 10,
  },
});
