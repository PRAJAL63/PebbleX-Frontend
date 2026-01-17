import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Spinner } from '@/components/ui/spinner';
import { useGetAllUsers } from '@/hooks/useAdmin';

export default function AdminUsers() {
  const { data: adminUsers, isLoading } = useGetAllUsers();
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Admin User View</h1>
            <p className="text-gray-500 mt-1">View all users</p>
          </div>

          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <Spinner className="w-8 h-8" />
            </div>
          )}

          {!isLoading && adminUsers && adminUsers.users.length === 0 && (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <p className="text-gray-500 mb-4">No orders found</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
