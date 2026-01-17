import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { useProduct, useUpdateProduct } from '@/hooks/useProducts';

import { Spinner } from '@/components/ui/spinner';
import updateProductSchema from '@/schema/product/updateProductSchema';
import { useEffect } from 'react';

export default function EditProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading: loadingProduct, data } = useProduct(id || '');
  const { mutate, isError, isPending, error } = useUpdateProduct();

  console.log('Product data:', data);
  const form = useForm<z.infer<typeof updateProductSchema>>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: {
      price: data?.price,
      stock: data?.stock,
    },
  });
  useEffect(() => {
    if (data) {
      form.reset({
        price: data.price ?? 0,
        stock: data.stock ?? 0,
      });
    }
  }, [data, form]);
  const onSubmit = async (values: z.infer<typeof updateProductSchema>) => {
    try {
      await mutate({ id: id || '', data: values });
      form.reset();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  if (loadingProduct) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner className="w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">{'Edit Product'}</h1>
            <p className="text-gray-500 mt-1">{'Update product information'}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price (NPR)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            {...field}
                            onChange={e => field.onChange(parseFloat(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="stock"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stock Quantity</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            {...field}
                            onChange={e => field.onChange(parseInt(e.target.value, 10))}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <div>{isError && <p className="text-red-500">{error?.message}</p>}</div>

                <div className="flex gap-3 pt-4">
                  <Button type="submit" disabled={form.formState.isSubmitting || isPending}>
                    {form.formState.isSubmitting ? 'Updating...' : 'Update Product'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/supplier/products')}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </main>
      </div>
    </div>
  );
}
