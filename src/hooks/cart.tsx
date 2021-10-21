import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ProductType } from '../types/product';

interface CartProviderProps {
  children: React.ReactNode;
}

interface ICartContextData {
  products: ProductType[];
  addToCart: (product: ProductType) => Promise<void>;
  removeToCart: (product: ProductType) => Promise<void>;
  cleanCart: () => void;
  totalCart: () => number;
}

export const CartContext = createContext({} as ICartContextData);

const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const addToCart = async (product: ProductType) => {
    const isInCart = products.find((item) => item.title === product.title);

    if (isInCart) {
      return;
    }

    setProducts([...products, product]);
    await AsyncStorage.setItem(
      '@star-wars-store:cart',
      JSON.stringify(products)
    );
  };

  const removeToCart = async (product: ProductType) => {
    const actualizedProducts = products.filter(
      (item) => item.title !== product.title
    );
    setProducts(actualizedProducts);
    await AsyncStorage.setItem(
      '@star-wars-store:cart',
      JSON.stringify(products)
    );
  };

  const cleanCart = () => {
    setProducts([]);
  };

  const totalCart = () => {
    if (products.length === 0) {
      return 0;
    }

    const total = products
      .map((product) => product.price)
      .reduce((acc, cur) => acc + cur);

    return total;
  };

  const verifyCartInAsyncStorage = async () => {
    const storage = await AsyncStorage.getItem('@star-wars-store:cart');

    if (storage) {
      const products = JSON.parse(storage) as ProductType[];

      setProducts(products);
    }
  };

  useEffect(() => {
    verifyCartInAsyncStorage();
  }, []);

  return (
    <CartContext.Provider
      value={{ products, addToCart, removeToCart, cleanCart, totalCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  return context;
};

export { CartProvider, useCart };
