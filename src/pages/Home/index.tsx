import React, { useContext, useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ThemeContext } from 'styled-components/native';
import { Header, Product } from '../../components';
import { getProducts } from '../../services/api';
import { ProductType } from '../../types/product';

import { Container, Text } from './styles';

export const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const theme = useContext(ThemeContext);

  const getData = useCallback(async () => {
    try {
      const response = await getProducts();
      // console.log(response);
      setProducts(response.data as ProductType[]);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container colors={[theme.colors.background, theme.colors.black]}>
      <Header />
      <FlatList
        data={products}
        keyExtractor={(item) => item.title}
        numColumns={2}
        renderItem={({ item }) => <Product product={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: RFValue(24),
          paddingHorizontal: RFValue(24),
        }}
      />
    </Container>
  );
};
