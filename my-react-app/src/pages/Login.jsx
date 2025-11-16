import { useState } from "react";
import InputField from "../components/InputField";


export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleLogin = (e) => {
e.preventDefault();
console.log("Logging in:", { email, password });
};


return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
<form
onSubmit={handleLogin}
className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
>
<h2 className="text-2xl font-bold text-center mb-6">Login</h2>


<InputField
label="Email"
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Enter your email"
/>


<InputField
label="Password"
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
placeholder="Enter your password"
/>


<button
type="submit"
className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-4"
>
Login
</button>


<p className="text-center text-sm mt-4">
Don't have an account? <a href="/register" className="text-blue-600">Register</a>
</p>
</form>
</div>
);
}