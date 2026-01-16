import api from '@/lib/api';

// Vendor info inside order
export interface Vendor {
  _id: string;
  email: string;
}

// Product info inside order items
export interface OrderProduct {
  _id: string;
  name: string;
  price: number;
}

// Each item in an order
export interface OrderItem {
  _id: string;
  product: OrderProduct;
  quantity: number;
}

// Single order
export interface Order {
  _id: string;
  vendor: Vendor;
  supplier: string; // supplier user ID
  items: OrderItem[];
  status: 'pending' | 'approved' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface orderFetchResponse {
  sucess: boolean;
  count: number;
  orders: Order[];
  message: string;
}
export interface orderApproveResponse {
  sucess: boolean;
  message: string;
  order: Order;
}

export interface orderRejectResponse {
  sucess: boolean;
  message: string;
  order: Order;
}

export interface orderShipResponse {
  sucess: boolean;
  message: string;
  order: Order;
}
export const orderService = {
  getSupplierOrders: async () => {
    const response = await api.get<orderFetchResponse>('/order/supplier');
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get<{ body: { data: Order } }>(`/order/${id}`);
    return response.data.body.data;
  },

  approve: async (orderId: string) => {
    const response = await api.patch<orderApproveResponse>(`/order/${orderId}/approve`);
    return response.data;
  },

  reject: async (orderId: string) => {
    const response = await api.patch<orderRejectResponse>(`/order/${orderId}/reject`);
    return response.data;
  },

  ship: async (orderId: string) => {
    const response = await api.patch<orderShipResponse>(`/order/${orderId}/ship`);
    return response.data;
  },
};
