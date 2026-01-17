import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ProductTable from '@/components/product/ProductTable';
import { Button } from '@/components/ui/button';
import { useProducts } from '@/hooks/useProducts';
import { Spinner } from '@/components/ui/spinner';

export default function SupplierProducts() {
  const navigate = useNavigate();
  const { data: products, isLoading, error } = useProducts();

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-950 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Products</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your product inventory</p>
            </div>
            <Button onClick={() => navigate('/supplier/products/new')}>
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </div>

          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <Spinner className="w-8 h-8" />
            </div>
          )}

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg border border-red-200 dark:border-red-800">
              Error loading products. Please try again.
            </div>
          )}

          {products && products.length === 0 && (
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow dark:shadow-gray-800 p-12 text-center border border-gray-200 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 mb-4">No products found</p>
              <Button onClick={() => navigate('/supplier/products/new')}>
                Add Your First Product
              </Button>
            </div>
          )}

          {products && products.length > 0 && <ProductTable products={products} />}
        </main>
      </div>
    </div>
  );
}
