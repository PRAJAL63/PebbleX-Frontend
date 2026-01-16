import { Routes, Route, Navigate } from 'react-router-dom';

// Public pages
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';

// Shared
import Dashboard from './pages/dashboard';
import ProtectedRoute from './components/ProtectedRoute';

// Supplier pages
import SupplierProducts from './pages/supplier/Products';
import ProductForm from './pages/supplier/ProductForm';
import SupplierOrders from './pages/supplier/Orders';
import SupplierOrderDetails from './pages/supplier/OrderDetails';
// import SupplierReports from './pages/supplier/Reports';

// Admin pages
import AdminHome from './pages/admin/Home';
import AdminProducts from './pages/admin/Products';
import AdminProductDetails from './pages/admin/ProductDetails';
import AdminOrders from './pages/admin/Orders';
import AdminOrderDetails from './pages/admin/OrderDetails';

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* General protected */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Supplier routes */}
      <Route
        path="/supplier/products"
        element={
          <ProtectedRoute allowedRoles={['supplier']}>
            <SupplierProducts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/supplier/products/new"
        element={
          <ProtectedRoute allowedRoles={['supplier']}>
            <ProductForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/supplier/products/:id/edit"
        element={
          <ProtectedRoute allowedRoles={['supplier']}>
            <ProductForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/supplier/orders"
        element={
          <ProtectedRoute allowedRoles={['supplier']}>
            <SupplierOrders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/supplier/orders/:id"
        element={
          <ProtectedRoute allowedRoles={['supplier']}>
            <SupplierOrderDetails />
          </ProtectedRoute>
        }
      />
      {/* <Route
        path="/supplier/reports"
        element={
          <ProtectedRoute allowedRoles={['supplier']}>
            <SupplierReports />
          </ProtectedRoute>
        }
      /> */}

      {/* Admin routes */}
      <Route
        path="/admin/home"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminProducts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/products/:id"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminProductDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/orders"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminOrders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/orders/:id"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminOrderDetails />
          </ProtectedRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
