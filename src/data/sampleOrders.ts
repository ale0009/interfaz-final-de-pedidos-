import { Order } from '../types';

export const sampleOrders: Order[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 8900",
    address: "123 Main St, City, Country",
    date: "2024-03-15",
    status: "completed",
    productos: [
      { id: "1", name: "Product 1", price: 29.99, quantity: 2 },
      { id: "2", name: "Product 2", price: 49.99, quantity: 1 },
    ]
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 234 567 8901",
    address: "456 Oak St, City, Country",
    date: "2024-03-14",
    status: "pending",
    productos: [
      { id: "3", name: "Product 3", price: 19.99, quantity: 3 },
      { id: "4", name: "Product 4", price: 39.99, quantity: 2 },
    ]
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 234 567 8902",
    address: "789 Pine St, City, Country",
    date: "2024-03-13",
    status: "cancelled",
    productos: [
      { id: "5", name: "Product 5", price: 59.99, quantity: 1 },
    ]
  }
];