import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Spinner } from '@/components/ui/spinner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, ShoppingCart, Package, DollarSign, AlertCircle } from 'lucide-react';
import { useProducts } from '@/hooks/useProducts';
import { useOrders } from '@/hooks/useOrders';

export default function SupplierReports() {
  const { data: products, isLoading: loadingProducts } = useProducts();
  const { data: orders, isLoading: loadingOrders } = useOrders();

  const totalProducts = products?.length || 0;
  const totalOrders = orders?.orders?.length || 0;
  const pendingOrders = orders?.orders?.filter(o => o.status === 'pending').length || 0;
  const deliveredOrders = orders?.orders?.filter(o => o.status === 'delivered').length || 0;

  const totalRevenue =
    orders?.orders?.reduce((sum, order) => {
      if (order.status === 'delivered') {
        return (
          sum +
          order.items.reduce(
            (itemSum, item) => itemSum + (item.product?.price ?? 0) * (item.quantity ?? 0),
            0,
          )
        );
      }
      return sum;
    }, 0) || 0;

  const totalPendingValue =
    orders?.orders?.reduce((sum, order) => {
      if (order.status === 'pending') {
        return (
          sum +
          order.items.reduce(
            (itemSum, item) => itemSum + (item.product?.price ?? 0) * (item.quantity ?? 0),
            0,
          )
        );
      }
      return sum;
    }, 0) || 0;

  const lowStockProducts = products?.filter(p => p.stock < 10).length || 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NP', {
      style: 'currency',
      currency: 'NPR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const isLoading = loadingProducts || loadingOrders;

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-950 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Reports & Analytics
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Track your sales performance and metrics
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Spinner className="w-8 h-8" />
            </div>
          ) : (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="border-gray-200 dark:border-gray-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{formatCurrency(totalRevenue)}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      From {deliveredOrders} delivered orders
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 dark:border-gray-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{totalOrders}</div>
                    <p className="text-xs text-muted-foreground mt-1">{pendingOrders} pending</p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 dark:border-gray-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{totalProducts}</div>
                    <p className="text-xs text-muted-foreground mt-1">In inventory</p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 dark:border-gray-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Value</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{formatCurrency(totalPendingValue)}</div>
                    <p className="text-xs text-muted-foreground mt-1">In pending orders</p>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-gray-200 dark:border-gray-800">
                  <CardHeader>
                    <CardTitle>Order Status Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Pending</span>
                      <span className="text-sm font-semibold">{pendingOrders} orders</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Delivered</span>
                      <span className="text-sm font-semibold">{deliveredOrders} orders</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Other Status</span>
                      <span className="text-sm font-semibold">
                        {totalOrders - pendingOrders - deliveredOrders} orders
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 dark:border-gray-800">
                  <CardHeader>
                    <CardTitle>Inventory Alerts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Low Stock Items</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {lowStockProducts} products below 10 units
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Package className="h-5 w-5 text-green-600 dark:text-green-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Well Stocked</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {totalProducts - lowStockProducts} products in good stock
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Stats */}
              <Card className="border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <CardTitle>Performance Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p className="text-2xl font-bold text-green-600 dark:text-green-500">
                        {deliveredOrders > 0
                          ? ((deliveredOrders / totalOrders) * 100).toFixed(1)
                          : 0}
                        %
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Delivery Rate</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-500">
                        {totalOrders > 0
                          ? formatCurrency(totalRevenue / totalOrders)
                          : formatCurrency(0)}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Avg Order Value
                      </p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-500">
                        {totalProducts}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Active Products
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
//                     <p className="text-xs text-muted-foreground mt-1">From all orders</p>
//                   </CardContent>
//                 </Card>

//                 <Card>
//                   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
//                     <ShoppingCart className="h-4 w-4 text-muted-foreground" />
//                   </CardHeader>
//                   <CardContent>
//                     <div className="text-2xl font-bold">{summary?.totalOrders || 0}</div>
//                     <p className="text-xs text-muted-foreground mt-1">All time</p>
//                   </CardContent>
//                 </Card>

//                 <Card>
//                   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
//                     <TrendingUp className="h-4 w-4 text-muted-foreground" />
//                   </CardHeader>
//                   <CardContent>
//                     <div className="text-2xl font-bold">
//                       {summary ? formatCurrency(summary.averageOrderValue) : 'NPR 0'}
//                     </div>
//                     <p className="text-xs text-muted-foreground mt-1">Per order</p>
//                   </CardContent>
//                 </Card>

//                 <Card>
//                   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
//                     <Package className="h-4 w-4 text-muted-foreground" />
//                   </CardHeader>
//                   <CardContent>
//                     <div className="text-2xl font-bold">{summary?.pendingOrders || 0}</div>
//                     <p className="text-xs text-muted-foreground mt-1">
//                       {summary?.approvedOrders || 0} approved
//                     </p>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Charts */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {loadingSales ? (
//                   <div className="flex justify-center items-center h-64 bg-white rounded-lg shadow">
//                     <Spinner className="w-6 h-6" />
//                   </div>
//                 ) : (
//                   salesData && <SalesChart data={salesData} />
//                 )}

//                 {loadingCategories ? (
//                   <div className="flex justify-center items-center h-64 bg-white rounded-lg shadow">
//                     <Spinner className="w-6 h-6" />
//                   </div>
//                 ) : (
//                   categorySales && <CategoryChart data={categorySales} />
//                 )}
//               </div>
//             </>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }
