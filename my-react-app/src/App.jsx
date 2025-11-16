import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";


export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/Login" element={<Login />} />
<Route path="/Register" element={<Register />} />
</Routes>
</BrowserRouter>
);
}