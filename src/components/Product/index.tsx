import React from 'react';
import { ProductType } from '../../types/product';
import { currencyFormat } from '../../utils/format';

import { Container, Image, ProductName, ProductPrice } from './styles';

interface ProductProps {
  product: ProductType;
  onPress: () => void;
}

export const Product = ({ product, onPress }: ProductProps) => {
  return (
    <Container onPress={onPress}>
      <Image source={{ uri: product.thumbnailHd }} />

      <ProductName>{product.title}</ProductName>
      <ProductPrice>{currencyFormat(product.price)}</ProductPrice>
    </Container>
  );
};
