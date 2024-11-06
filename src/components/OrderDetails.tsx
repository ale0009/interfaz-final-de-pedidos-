import React from 'react';
import { Package, ShoppingCart, User, Phone, Mail, MapPin } from 'lucide-react';
import { Order } from '../types';

interface OrderDetailsProps {
  order: Order;
}

export function OrderDetails({ order }: OrderDetailsProps) {
  const totalItems = order.productos.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = order.productos.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="space-y-8">
      {/* Customer Information Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-3">
            <User className="w-5 h-5 text-emerald-600" />
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{order.name}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-emerald-600" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{order.email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-emerald-600" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{order.phone}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-emerald-600" />
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium">{order.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>
          <div className="flex items-center space-x-2">
            <ShoppingCart className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-medium text-gray-600">{totalItems} items</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6">
          {order.productos.map((item) => (
            <div 
              key={item.id}
              className="flex items-center justify-between p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Package className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold text-gray-800">Total Amount</p>
              <p className="text-sm text-gray-500">Including all items</p>
            </div>
            <p className="text-2xl font-bold text-emerald-600">${totalAmount.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}