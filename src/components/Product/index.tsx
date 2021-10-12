import React from 'react';
import { ProductType } from '../../types/product';

import { Container, Image, ProductName, ProductPrice } from './styles';

interface ProductProps {
  product: ProductType;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <Container>
      <Image source={{ uri: product.thumbnailHd }} />

      <ProductName>{product.title}</ProductName>
      <ProductPrice>{product.price}</ProductPrice>
    </Container>
  );
};
