import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Spinner } from '@/components/ui/spinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  console.log('ProtectedRoute:', {
    user,
    isAuthenticated,
    isLoading,
    allowedRoles,
    path: location.pathname,
  });

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner className="h-8 w-8" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    console.log('Role mismatch - user role:', user.role, 'allowed:', allowedRoles);
    // Redirect to appropriate dashboard if role doesn't match
    if (user.role === 'SUPPLIER') {
      return <Navigate to="/supplier/products" replace />;
    } else if (user.role === 'ADMIN') {
      return <Navigate to="/admin/products" replace />;
    } else {
      return <Navigate to="/dashboard" replace />;
    }
  }

  console.log('Rendering children for:', location.pathname);
  return <>{children}</>;
}
