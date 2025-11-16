import { useState } from "react";
import InputField from "../components/InputField";


export default function Register() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleRegister = (e) => {
e.preventDefault();
console.log("Registering:", { name, email, password });
};


return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
<form
onSubmit={handleRegister}
className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
>
<h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>


<InputField
label="Full Name"
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Enter your full name"
/>


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
placeholder="Create a strong password"
/>


<button
type="submit"
className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg mt-4"
>
Register
</button>


<p className="text-center text-sm mt-4">
Already have an account? <a href="/login" className="text-blue-600">Login</a>
</p>
</form>
</div>
);
}