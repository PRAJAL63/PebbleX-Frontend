import { useState, useEffect, createContext, useContext, type ReactNode } from 'react';

import { authService, type UserProfile } from '@/services/auth.service';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import type { UserLoginInput } from '@/generated';
import { useQuery } from '@tanstack/react-query';

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (data: UserLoginInput) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          try {
            const profile = await authService.getProfile();
            setUser(profile.user);
          } catch (error) {
            console.error('Failed to fetch profile', error);
            localStorage.removeItem('authToken');
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (data: UserLoginInput) => {
    try {
      const response = await authService.login(data);
      if (response.data && response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        const profile = await authService.getProfile();
        setUser(profile.user);
        toast.success('Login successful');

        console.log('Login successful, user role:', profile.user.role);

        // Redirect based on role
        if (profile.user.role === 'SUPPLIER') {
          navigate('/supplier/products');
        } else if (profile.user.role === 'ADMIN') {
          navigate('/admin/products');
        } else {
          // Fallback
          navigate('/dashboard');
        }
      }
    } catch (error: any) {
      toast.error(error.message || 'Login failed');
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    navigate('/login');
    toast.success('Logged out successfully');
  };

  // Always render children - no loading state blocking
  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export const useGetMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: authService.getProfile,
  });
};
