import api from '@/lib/api';

// Vendor info inside order
export interface Vendor {
  _id: string;
  email: string;
  address: string;
}

// Product info inside order items
export interface OrderProduct {
  _id: string;
  name: string;
  price: number;
  address: string;
}

// Each item in an order
export interface OrderItem {
  _id: string;
  product: OrderProduct;
  quantity: number;
}
export interface Supplier {
  _id: string;
  email: string;
}

// Single order
export interface Order {
  _id: string;
  vendor: Vendor;
  supplier: Supplier;
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
export interface orderByIdResponse {
  sucess: boolean;
  order: Order;
  message: string;
}
export const orderService = {
  getSupplierOrders: async () => {
    const response = await api.get<orderFetchResponse>('/order/supplier');
    console.log(response);
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get<orderByIdResponse>(`/order/${id}`);
    return response.data.order;
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
