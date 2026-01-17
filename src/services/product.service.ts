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
export interface createProductInput {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  sku: string;
  lowStockThreshold: number;
}
export interface updateProductResponse {
  sucess: boolean;
  product: Product;
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
    try {
      const response = await api.get<updateProductResponse>(`/product/${id}`);
      return response.data.product;
    } catch (error) {
      const err = error as {
        response?: { data?: { body?: { message?: string }; message?: string } };
      };
      const errorMessage =
        err.response?.data?.body?.message || err.response?.data?.message || 'Failed to fetch clans';
      throw new Error(errorMessage);
    }
  },

  create: async (data: createProductInput) => {
    try {
      const response = await api.post<createProductResponse>('/product', data);
      console.log(response);
      return response.data;
    } catch (error) {
      const err = error as {
        response?: { data?: { body?: { message?: string }; message?: string } };
      };
      const errorMessage =
        err.response?.data?.body?.message || err.response?.data?.message || 'Failed to fetch clans';
      throw new Error(errorMessage);
    }
  },

  update: async (id: string, data: Partial<Product>) => {
    try {
      const response = await api.put<updateProductResponse>(`/product/${id}`, data);
      return response.data.product;
    } catch (error) {
      const err = error as {
        response?: { data?: { body?: { message?: string }; message?: string } };
      };
      const errorMessage =
        err.response?.data?.body?.message || err.response?.data?.message || 'Failed to fetch clans';
      throw new Error(errorMessage);
    }
  },

  delete: async (id: string) => {
    const response = await api.delete<deleteProductResponse>(`/product/${id}`);
    return response.data;
  },
};
