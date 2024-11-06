import React, { useState } from 'react';
import { OrderList } from './components/OrderList';
import { OrderDetails } from './components/OrderDetails';
import { sampleOrders } from './data/sampleOrders';

function App() {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const selectedOrder = sampleOrders.find(order => order.id === selectedOrderId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order List */}
          <div className="lg:col-span-1">
            <OrderList
              orders={sampleOrders}
              selectedOrderId={selectedOrderId}
              onSelectOrder={setSelectedOrderId}
            />
          </div>

          {/* Order Details */}
          <div className="lg:col-span-2">
            {selectedOrder ? (
              <OrderDetails order={selectedOrder} />
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center h-48">
                <p className="text-gray-500 text-lg">Select an order to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;