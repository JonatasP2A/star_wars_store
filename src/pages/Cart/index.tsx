import React from 'react';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/app.routes';

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

type Props = NativeStackScreenProps<RootStackParamList, 'Cart'>;

export const Cart = ({ navigation }: Props) => {
  const { products, totalCart } = useCart();

  const handleContinue = () => {
    if (products.length > 0) {
      navigation.navigate('Payment');
    }
  };

  return (
    <Background>
      <Header>
        <IconButton onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={RFValue(24)} color="#FFF" />
        </IconButton>
        <HeaderText>Carrinho</HeaderText>
      </Header>

      <Content>
        <FlatList
          data={products}
          keyExtractor={(item) => item.title}
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
          <ButtonText>CONTINUAR</ButtonText>
        </Button>
      </Footer>
    </Background>
  );
};
