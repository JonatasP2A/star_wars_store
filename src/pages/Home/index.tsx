import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Header, Product, Background } from '../../components';
import { RootStackParamList } from '../../routes/app.routes';
import { getProducts } from '../../services/api';
import { ProductType } from '../../types/product';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({ navigation }: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSelectProduct = (product: ProductType) => {
    navigation.navigate('Product', {
      product,
    });
  };

  const handleGoToProfile = () => {
    navigation.navigate('Profile');
  };

  const handleGoToCart = () => {
    navigation.navigate('Cart');
  };

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
      <Header goToProfile={handleGoToProfile} goToCart={handleGoToCart} />
      {loading ? (
        <View style={{ flex: 1 }}>
          <ActivityIndicator color="#FFF" size="large" />
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.title}
          numColumns={2}
          renderItem={({ item }) => (
            <Product product={item} onPress={() => handleSelectProduct(item)} />
          )}
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
