import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Header, Product, Background } from '../../components';
import { getProducts } from '../../services/api';
import { ProductType } from '../../types/product';

export const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getProducts();
      setProducts(response.data as ProductType[]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Background>
      <Header />
      {loading ? (
        <View style={{ flex: 1 }}>
          <ActivityIndicator color="#FFF" size="large" />
        </View>
      ) : (
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
      )}
    </Background>
  );
};
