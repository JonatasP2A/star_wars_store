import axios from 'axios';
import { IPurchase } from '../types/cart';
import { IHistoric } from '../types/product';

const apiProducts = axios.create({
  baseURL:
    'https://raw.githubusercontent.com/stone-pagamentos/desafio-mobile/master/store',
});

const apiCart = axios.create({
  baseURL: 'https://us-east1-s4hpf63bwchwcxyc8gn1op1rfij43v.cloudfunctions.net',
});

// GET
export const getProducts = () => {
  return apiProducts.get('/products.json');
};

export const getHistoric = ({ id_user }: IHistoric) => {
  return apiCart.get('/mobile-challenge-get', { params: { id_user } });
};

// POST
export const postPurchase = ({
  id_user,
  card_number,
  value,
  cvv,
  card_holder_name,
  exp_date,
  itens,
}: IPurchase) => {
  return apiCart.post('/mobile-challenge-post', {
    id_user,
    card_number,
    value,
    cvv,
    card_holder_name,
    exp_date,
    itens,
  });
};
