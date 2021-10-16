import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Header, Product, Background } from '../../components';
import { RootStackParamList } from '../../routes/app.routes';
import { getProducts } from '../../services/api';
import { ProductType } from '../../types/product';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({ navigation }: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const getData = useCallback(async () => {
    try {
      const response = await getProducts();
      setProducts(response.data as ProductType[]);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Background>
      <Header navigation={navigation} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.title}
        numColumns={2}
        renderItem={({ item }) => <Product product={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: RFValue(24),
          justifyContent: 'space-between',
        }}
      />
    </Background>
  );
};
