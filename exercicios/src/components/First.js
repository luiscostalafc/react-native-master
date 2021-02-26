import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const First = (props) => {
  const numberRandom = Math.random() * (props.max - props.min) + props.min;
  console.warn(numberRandom);

  return (
    <>
      <View>
        <Text style={style.container}>
          O número máximo é {props.max ?? 'Preencha o valor máximo:'} e o mínimo
          é {props.min ?? 'Preencha o valor mínimo:'}
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
