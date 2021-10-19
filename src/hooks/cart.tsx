import React, { createContext, useState, useContext } from 'react';
import { ProductType } from '../types/product';

interface CartProviderProps {
  children: React.ReactNode;
}

interface ICartContextData {
  products: ProductType[];
  addToCart: (product: ProductType) => void;
  removeToCart: (product: ProductType) => void;
  totalCart: () => number;
}

export const CartContext = createContext({} as ICartContextData);

const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const addToCart = (product: ProductType) => {
    const isInCart = products.find((item) => item.title === product.title);

    if (isInCart) {
      return;
    }

    setProducts([...products, product]);
  };

  const removeToCart = (product: ProductType) => {
    const actualizedProducts = products.filter(
      (item) => item.title !== product.title
    );
    setProducts(actualizedProducts);
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

  return (
    <CartContext.Provider
      value={{ products, addToCart, removeToCart, totalCart }}
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
