import React, { createContext, useState, useContext } from 'react';
import { ProductType } from '../types/product';

interface CartProviderProps {
  children: React.ReactNode;
}

interface ICartContextData {
  products: ProductType[];
  addToCart: (product: ProductType) => void;
  removeToCart: (product: ProductType) => void;
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

  return (
    <CartContext.Provider value={{ products, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  return context;
};

export { CartProvider, useCart };
