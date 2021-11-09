import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/app.routes';
import { goBack } from '../../routes/NavigationService';

import { useCart } from '../../hooks/cart';
import { Background } from '../../components';

import { currencyFormat } from '../../utils/format';

import * as S from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Product'>;

const { width, height } = Dimensions.get('window');

export const Product = ({ route }: Props) => {
  const { product } = route.params;
  const theme = useContext(ThemeContext);
  const { products, addToCart, removeToCart } = useCart();

  const handleAdd = async () => {
    await addToCart(product);
  };

  const handleRemove = async () => {
    await removeToCart(product);
  };

  return (
    <Background>
      <S.IconButton onPress={() => goBack()}>
        <Feather
          name="arrow-left"
          size={RFValue(24)}
          color={theme.colors.white}
        />
      </S.IconButton>

      <SharedElement
        id={product.title}
        style={{
          height: height * 0.45,
          width,
          position: 'absolute',
          top: Constants.statusBarHeight,
          left: 0,
          zIndex: 10,
        }}
      >
        <S.Image source={{ uri: product.thumbnailHd }} />
      </SharedElement>

      <S.Container>
        <S.Title>{product.title}</S.Title>

        <S.Row>
          <S.Description>Vendedor</S.Description>
          <S.ProductInfo>{product.seller}</S.ProductInfo>
        </S.Row>

        <S.Row>
          <S.Description>Data do anúncio</S.Description>
          <S.ProductInfo>{product.date}</S.ProductInfo>
        </S.Row>

        <S.Footer>
          <S.PriceText>{currencyFormat(product.price)}</S.PriceText>

          {products.find((item) => item.title === product.title) ? (
            <S.CardButton
              onPress={handleRemove}
              style={{ backgroundColor: 'transparent' }}
            >
              <Feather name="trash" size={RFValue(16)} color="#E3656E" />
              <S.CardText remove>Remover do carrinho</S.CardText>
            </S.CardButton>
          ) : (
            <S.CardButton onPress={handleAdd}>
              <Feather
                name="shopping-cart"
                size={RFValue(16)}
                color={theme.colors.black}
              />
              <S.CardText>Adicionar ao carrinho</S.CardText>
            </S.CardButton>
          )}
        </S.Footer>
      </S.Container>
    </Background>
  );
};
