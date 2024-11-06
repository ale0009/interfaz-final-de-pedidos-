export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  productos: CartItem[];
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
}