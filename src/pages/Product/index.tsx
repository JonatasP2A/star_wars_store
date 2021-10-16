import React, { useContext } from 'react';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/app.routes';
import { currencyFormat } from '../../utils/format';

import { Background } from '../../components';
import * as S from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Product'>;

export const Product = ({ route, navigation }: Props) => {
  const { product } = route.params;
  const theme = useContext(ThemeContext);

  return (
    <Background>
      <S.IconButton onPress={() => navigation.navigate('Home')}>
        <Feather
          name="chevron-left"
          size={RFValue(24)}
          color={theme.colors.black}
        />
      </S.IconButton>
      <S.Image source={{ uri: product.thumbnailHd }} />
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

          <S.CardButton>
            <Feather
              name="shopping-cart"
              size={24}
              color={theme.colors.black}
            />
            <S.CardText>Adicionar ao carrinho</S.CardText>
          </S.CardButton>
        </S.Footer>
      </S.Container>
    </Background>
  );
};
