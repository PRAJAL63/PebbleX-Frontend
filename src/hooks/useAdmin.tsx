import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { adminService } from '@/services/admin.services';

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: adminService.getAllProducts,
  });
};

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: adminService.getAllUsers,
  });
};

export const useGetAllOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: adminService.getAllOrders,
  });
};

export const useToggleUserStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId: string) => adminService.toggleUserStatus(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success('User status updated successfully');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update user status');
    },
  });
};

export const useGetAllLowStockProducts = () => {
  return useQuery({
    queryKey: ['products', 'low-stock'],
    queryFn: adminService.getLowStockProducts,
  });
};
