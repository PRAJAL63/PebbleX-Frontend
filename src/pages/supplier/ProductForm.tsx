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
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useProduct, useCreateProduct } from '@/hooks/useProducts';
import createProductSchema from '@/schema/product/createProductSchema';
import { Spinner } from '@/components/ui/spinner';
import {
  Wrench,
  Hammer,
  ShieldCheck,
  Flame,
  FlaskConical,
  Sparkles,
  Package,
  Wind,
  Zap,
} from 'lucide-react';

const categories = [
  { value: 'Power Tools', icon: Wrench, color: 'text-blue-600' },
  { value: 'Hand Tools', icon: Hammer, color: 'text-orange-600' },
  { value: 'Safety Equipment', icon: ShieldCheck, color: 'text-green-600' },
  { value: 'Welding Equipment', icon: Flame, color: 'text-red-600' },
  { value: 'Testing Equipment', icon: FlaskConical, color: 'text-purple-600' },
  { value: 'Cleaning Equipment', icon: Sparkles, color: 'text-cyan-600' },
  { value: 'Storage', icon: Package, color: 'text-amber-600' },
  { value: 'Access Equipment', icon: Package, color: 'text-indigo-600' },
  { value: 'Compressors', icon: Wind, color: 'text-teal-600' },
  { value: 'Power Generation', icon: Zap, color: 'text-yellow-600' },
];

export default function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const { isLoading: loadingProduct } = useProduct(id || '');
  const { mutate, isError, isPending, error } = useCreateProduct();

  const form = useForm<z.infer<typeof createProductSchema>>({
    resolver: zodResolver(createProductSchema) as any,
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      stock: 0,
      category: '',
      sku: 'sup-1', // TODO: Get from auth context
      lowStockThreshold: 5,
    },
  });

  const onSubmit = async (values: z.infer<typeof createProductSchema>) => {
    try {
      await mutate({
        ...values,
        lowStockThreshold: Number(values.lowStockThreshold) ?? 5,
      });
      form.reset();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  if (loadingProduct && isEdit) {
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
            <h1 className="text-2xl font-bold">{isEdit ? 'Edit Product' : 'Add New Product'}</h1>
            <p className="text-gray-500 mt-1">
              {isEdit ? 'Update product information' : 'Fill in the product details'}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter product name" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white">
                          {categories.map(cat => {
                            const Icon = cat.icon;
                            return (
                              <SelectItem
                                key={cat.value}
                                value={cat.value}
                                className="cursor-pointer"
                              >
                                <div className="flex items-center gap-2">
                                  <Icon className={`h-4 w-4 ${cat.color}`} />
                                  <span>{cat.value}</span>
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

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

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter product description" rows={4} {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sku"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SKU</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter product SKU" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lowStockThreshold"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Low Stock Threshold (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder=""
                          {...field}
                          onChange={e => field.onChange(parseInt(e.target.value, 10))}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <div>{isError && <p className="text-red-500">{error?.message}</p>}</div>

                <div className="flex gap-3 pt-4">
                  <Button type="submit" disabled={form.formState.isSubmitting || isPending}>
                    {form.formState.isSubmitting
                      ? 'Saving...'
                      : isEdit
                        ? 'Update Product'
                        : 'Create Product'}
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
