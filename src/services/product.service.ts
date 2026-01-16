import api from '@/lib/api';

export interface Product {
  _id: string;
  supplier: {
    _id: string;
    name: string;
  };
  name: string;
  description: string;
  price: number;
  stock: number;
  sold: number;
  category: string;
  sku: string;
  images: string;
  rating: number;
  status: 'active' | 'inactive';
  lowStockThreshold: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface productFetchResponse {
  sucess: boolean;
  products: Product[];
  message: string;
}

export interface getLowStockProductsResponse {
  sucess: boolean;
  count: number;
  products: Product[];
  message: string;
}

export interface createProductResponse {
  sucess: boolean;
  message: string;
  product: Product;
}

export interface updateProductResponse {
  sucess: boolean;
  product: Product;
  message: string;
}
export interface deleteProductResponse {
  sucess: boolean;
  message: string;
}

export const productService = {
  getAll: async () => {
    const response = await api.get<productFetchResponse>('/product');
    return response.data.products;
  },

  getLowStock: async () => {
    const response = await api.get<getLowStockProductsResponse>('/product/low-stock');
    return response.data.products;
  },

  getById: async (id: string) => {
    const response = await api.get<{ body: { data: Product } }>(`/product/${id}`);
    return response.data.body.data;
  },

  create: async (data: Partial<Product>) => {
    const response = await api.post<createProductResponse>('/product', data);
    return response.data.product;
  },

  update: async (id: string, data: Partial<Product>) => {
    const response = await api.put<updateProductResponse>(`/product/${id}`, data);
    return response.data.product;
  },

  delete: async (id: string) => {
    const response = await api.delete<deleteProductResponse>(`/product/${id}`);
    return response.data;
  },
};
