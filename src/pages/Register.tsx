import RegisterForm from '@/components/auth/RegisterForm';

export default function Register() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex w-1/2 bg-linear-to-tr from-green-950 to-green-900 items-center justify-center">
        <img src="/register.jpg" className="w-4/5 rounded-2xl shadow-lg text-white" />
      </div>
      <RegisterForm />
    </div>
  );
}
