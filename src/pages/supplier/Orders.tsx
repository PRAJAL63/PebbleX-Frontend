import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import OrderTable from '@/components/order/OrderTable';
import { useOrders } from '@/hooks/useOrders';
import { Spinner } from '@/components/ui/spinner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Order } from '@/services/order.service';

export default function SupplierOrders() {
  const { data: allOrders, isLoading } = useOrders(); // TODO: Get from auth
  const orders: Order[] = Array.isArray(allOrders?.orders) ? allOrders.orders : [];
  console.log('data', orders);
  const pendingOrders = orders.filter(o => o.status === 'pending');
  const shippingOrders = orders.filter(o =>
    ['approved', 'processing', 'shipped'].includes(o.status),
  );
  const rejectedOrders = orders.filter(o =>
    ['delivered', 'rejected', 'cancelled'].includes(o.status),
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Orders</h1>
            <p className="text-gray-500 mt-1">Manage and track your orders</p>
          </div>

          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <Spinner className="w-8 h-8" />
            </div>
          )}

          {!isLoading && (
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All Orders ({orders.length})</TabsTrigger>
                <TabsTrigger value="pending">Pending ({pendingOrders.length})</TabsTrigger>
                <TabsTrigger value="active">Shipping ({shippingOrders.length})</TabsTrigger>
                <TabsTrigger value="completed">Rejected ({rejectedOrders.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                {orders.length > 0 ? (
                  <OrderTable orders={orders} isSupplier />
                ) : (
                  <div className="bg-white rounded-lg shadow p-12 text-center">
                    <p className="text-gray-500">No orders found</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="pending">
                {pendingOrders.length > 0 ? (
                  <OrderTable orders={pendingOrders} isSupplier />
                ) : (
                  <div className="bg-white rounded-lg shadow p-12 text-center">
                    <p className="text-gray-500">No pending orders</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="active">
                {shippingOrders.length > 0 ? (
                  <OrderTable orders={shippingOrders} isSupplier />
                ) : (
                  <div className="bg-white rounded-lg shadow p-12 text-center">
                    <p className="text-gray-500">No active orders</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="completed">
                {rejectedOrders.length > 0 ? (
                  <OrderTable orders={rejectedOrders} isSupplier />
                ) : (
                  <div className="bg-white rounded-lg shadow p-12 text-center">
                    <p className="text-gray-500">No completed orders</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          )}
        </main>
      </div>
    </div>
  );
}
