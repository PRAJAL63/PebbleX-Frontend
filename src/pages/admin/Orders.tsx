import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import OrderTable from '@/components/order/OrderTable';
import { useOrders } from '@/hooks/useOrders';
import { Spinner } from '@/components/ui/spinner';
import { useGetAllOrders } from '@/hooks/useAdmin';
import { useGetMe } from '@/hooks/useAuth';

export default function AdminOrders() {
  const { data: orders, isLoading } = useOrders(); // Filter logic can be added later
  const { data: adminOrders, isLoading: isAdminOrdersLoading } = useGetAllOrders();
  const { data: user } = useGetMe();
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-950 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Order View</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">View all orders</p>
          </div>

          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <Spinner className="w-8 h-8" />
            </div>
          )}

          {!isLoading &&
            !isAdminOrdersLoading &&
            orders &&
            orders.orders.length === 0 &&
            adminOrders &&
            adminOrders.orders.length === 0 && (
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow dark:shadow-gray-800 p-12 text-center border border-gray-200 dark:border-gray-800">
                <p className="text-gray-500 dark:text-gray-400 mb-4">No orders found</p>
              </div>
            )}

          {user && user.user.role === 'ADMIN' && adminOrders && adminOrders.orders.length > 0 ? (
            <OrderTable orders={adminOrders.orders} isSupplier={false} />
          ) : (
            orders &&
            orders.orders.length > 0 && <OrderTable orders={orders.orders} isSupplier={true} />
          )}
        </main>
      </div>
    </div>
  );
}
