import api from '@/lib/api';
import type { UserProfile } from './auth.service';
import type { Order } from './order.service';
import type { Product } from './product.service';

export interface getAllUsersResponse {
  sucess: boolean;
  users: UserProfile[];
  message: string;
}

export interface toggleUserStatusResponse {
  sucess: boolean;
  message: string;
  user: UserProfile;
}

export interface getAllOrdersResponse {
  sucess: boolean;
  count: number;
  orders: Order[];
  message: string;
}
export interface getAllLowStockProductsResponse {
  sucess: boolean;
  products: Product[];
  message: string;
}

export const adminService = {
  getAllUsers: async () => {
    const response = await api.get<getAllUsersResponse>('/admin/users');
    return response.data;
  },
  toggleUserStatus: async (userId: string) => {
    const response = await api.patch<toggleUserStatusResponse>(
      `/admin/user/${userId}/toggle-status`,
    );
    return response.data;
  },
  getAllOrders: async () => {
    const response = await api.get<getAllOrdersResponse>('admin/orders');
    return response.data;
  },
  getLowStockProducts: async () => {
    const response = await api.get<getAllLowStockProductsResponse>('/admin/products/low-stock');
    return response.data.products;
  },
};
