import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useGetAllUsers } from '@/hooks/useAdmin';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function UserTable() {
  const { data: usersData, isLoading } = useGetAllUsers();
  const navigate = useNavigate();

  const formatDate = (dateString?: Date) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getRoleBadgeColor = (role: string) => {
    const colors: Record<string, string> = {
      ADMIN: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      SUPPLIER: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      USER: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
      VENDOR: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    };
    return colors[role] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  };

  const handleViewUser = (userId: string) => {
    navigate(`/admin/users/${userId}`);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-950 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">View and manage all users</p>
          </div>

          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <Spinner className="w-8 h-8" />
            </div>
          )}

          {!isLoading && (!usersData?.users || usersData.users.length === 0) && (
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow dark:shadow-gray-800 p-12 text-center border border-gray-200 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 mb-4">No users found</p>
            </div>
          )}

          {!isLoading && usersData?.users && usersData.users.length > 0 && (
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow dark:shadow-gray-800 border border-gray-200 dark:border-gray-800">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usersData.users.map(user => (
                    <TableRow key={user._id || user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge className={getRoleBadgeColor(user.role)}>{user.role}</Badge>
                      </TableCell>
                      <TableCell>{user.phone || 'N/A'}</TableCell>
                      <TableCell className="max-w-xs truncate">{user.address || 'N/A'}</TableCell>
                      <TableCell>{formatDate(user.createdAt)}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewUser(user._id || user.id || '')}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
