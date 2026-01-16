import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { orderService } from '@/services/order.service';
import { toast } from 'sonner';

export const useOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: orderService.getSupplierOrders,
  });
};

export const useOrder = (id: string) => {
  return useQuery({
    queryKey: ['orders', id],
    queryFn: () => orderService.getById(id),
    enabled: !!id,
  });
};

export const useApproveOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: orderService.approve,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      toast.success('Order approved successfully');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to approve order');
    },
  });
};

export const useRejectOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: orderService.reject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      toast.success('Order rejected successfully');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to reject order');
    },
  });
};

export const useShipOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: orderService.ship,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      toast.success('Order shipped successfully');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to ship order');
    },
  });
};
