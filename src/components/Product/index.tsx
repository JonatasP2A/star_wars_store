import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';

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
      <SharedElement id={product.title} style={{ flex: 1 }}>
        <Image source={{ uri: product.thumbnailHd }} />
      </SharedElement>

      <ProductName>{product.title}</ProductName>
      <ProductPrice>{currencyFormat(product.price)}</ProductPrice>
    </Container>
  );
};
