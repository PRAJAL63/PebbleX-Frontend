import { useGetMe } from '@/hooks/useAuth';
import { Button } from './ui/button';

const Header = () => {
  const { data } = useGetMe();
  return (
    <header className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 transition-colors">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
      <Button className="cursor-pointer border px-4 py-2 text-sm rounded-2xl">
        {data?.user?.name}
      </Button>
    </header>
  );
};

export default Header;
