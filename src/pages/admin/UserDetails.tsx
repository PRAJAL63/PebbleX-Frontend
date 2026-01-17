import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useGetAllUsers, useToggleUserStatus } from '@/hooks/useAdmin';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Shield } from 'lucide-react';

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: usersData, isLoading } = useGetAllUsers();
  const { mutate: toggleStatus, isPending } = useToggleUserStatus();

  const user = usersData?.users?.find(u => u._id === id || u.id === id);

  const formatDate = (dateString?: Date) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getRoleBadgeColor = (role: string) => {
    const colors: Record<string, string> = {
      ADMIN: 'bg-purple-100 text-purple-800',
      SUPPLIER: 'bg-blue-100 text-blue-800',
      USER: 'bg-gray-100 text-gray-800',
    };
    return colors[role] || 'bg-gray-100 text-gray-800';
  };

  const handleToggleStatus = () => {
    if (user) {
      toggleStatus(user._id || user.id || '');
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner className="w-8 h-8" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <p className="text-gray-500 mb-4">User not found</p>
              <Button onClick={() => navigate('/admin/users')}>Back to Users</Button>
            </div>
          </main>
        </div>
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
            <Button variant="ghost" onClick={() => navigate('/admin/users')} className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Users
            </Button>
            <h1 className="text-2xl font-bold">User Details</h1>
            <p className="text-gray-500 mt-1">View and manage user information</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* User Profile Card */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-4 flex-1">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Full Name</label>
                      <p className="text-lg font-semibold">{user.name}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <div>
                        <label className="text-sm font-medium text-gray-500 block">Email</label>
                        <p className="text-base">{user.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <div>
                        <label className="text-sm font-medium text-gray-500 block">Phone</label>
                        <p className="text-base">{user.phone || 'Not provided'}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <div>
                        <label className="text-sm font-medium text-gray-500 block">Address</label>
                        <p className="text-base">{user.address || 'Not provided'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Role & Status Card */}
            <Card>
              <CardHeader>
                <CardTitle>Role & Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    User Role
                  </label>
                  <div className="mt-2">
                    <Badge className={getRoleBadgeColor(user.role)}>{user.role}</Badge>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <div>
                    <label className="text-sm font-medium text-gray-500 block">Joined</label>
                    <p className="text-sm">{formatDate(user.createdAt)}</p>
                  </div>
                </div>

                {user.updatedAt && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-500 block">
                        Last Updated
                      </label>
                      <p className="text-sm">{formatDate(user.updatedAt)}</p>
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <Button
                    onClick={handleToggleStatus}
                    disabled={isPending}
                    variant="outline"
                    className="w-full"
                  >
                    {isPending ? 'Updating...' : 'Toggle User Status'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
