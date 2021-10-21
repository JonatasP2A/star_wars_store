export interface IPurchase {
  id_user: number;
  card_number: number;
  value: number;
  cvv: number;
  card_holder_name: string;
  exp_date: string;
  itens: string[];
}
