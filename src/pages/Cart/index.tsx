import React from 'react';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { goBack, navigate } from '../../routes/NavigationService';

import { useCart } from '../../hooks/cart';
import { Background, ProductCart } from '../../components';
import { currencyFormat } from '../../utils/format';

import {
  Header,
  IconButton,
  HeaderText,
  Content,
  Footer,
  Line,
  Row,
  Text,
  Button,
  ButtonText,
} from './styles';

export const Cart = () => {
  const { products, totalCart } = useCart();

  const handleContinue = () => {
    if (products.length > 0) {
      navigate('Payment', undefined);
    }
  };

  return (
    <Background>
      <Header>
        <IconButton onPress={() => goBack()}>
          <Feather name="chevron-left" size={RFValue(24)} color="#FFF" />
        </IconButton>
        <HeaderText>Carrinho</HeaderText>
      </Header>

      <Content>
        <FlatList
          data={products}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ProductCart product={item} />}
          contentContainerStyle={{
            paddingVertical: RFValue(48),
          }}
        />
      </Content>
      <Footer>
        <Line />

        <Row>
          <Text>Total</Text>
          <Text>{currencyFormat(totalCart())}</Text>
        </Row>

        <Line />

        <Button onPress={handleContinue}>
          <ButtonText>Prosseguir</ButtonText>
        </Button>
      </Footer>
    </Background>
  );
};
