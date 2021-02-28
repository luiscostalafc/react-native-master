import React from 'react';
import {Text} from 'react-native';

import products from './products';

const ProductsListExample = () => {
  function getList() {
    return products.map((product) => {
      return (
        <Text key={product.id}>
          {product.id} {product.name} tem o preço de {product.price}
        </Text>
      );
    });
  }

  return (
    <>
      <Text>Lista de Produtos</Text>
      {getList()}
    </>
  );
};

export default ProductsListExample;
