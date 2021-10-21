import React, { useContext } from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { ThemeContext } from 'styled-components/native';

import { ProductType } from '../../types/product';
import { currencyFormat } from '../../utils/format';

import { Container, Image, Content, Row, Title, Price } from './styles';
import { TouchableOpacity } from 'react-native';
import { useCart } from '../../hooks/cart';

interface ProductCartProps {
  product: ProductType;
}

export const ProductCart = ({ product }: ProductCartProps) => {
  const theme = useContext(ThemeContext);
  const { removeToCart } = useCart();

  const handleRemove = async (product: ProductType) => {
    await removeToCart(product);
  };

  return (
    <Container>
      <Image source={{ uri: product.thumbnailHd }} />

      <Content>
        <Row>
          <Title>{product.title}</Title>
          <TouchableOpacity onPress={() => handleRemove(product)}>
            <Feather
              name="trash-2"
              size={RFValue(14)}
              color={theme.colors.gray}
            />
          </TouchableOpacity>
        </Row>

        <Price>{currencyFormat(product.price)}</Price>
      </Content>
    </Container>
  );
};
