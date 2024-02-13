import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

export default function Signup() {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:3000/signup", {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
                address : address
            });
            localStorage.setItem("token", response.data.token);
            console.log("Signup successful");
            navigate("/dashboard", { replace: true });
        } catch (error) {
            console.error("Signup failed:", error);
            console.log("Error response:", error.response);
        }
    };

    const handleSignin = () => {
        navigate("/signin");
    };

    return (
        <div className="flex justify-center m-20">
            <div className="shadow-2xl w-auto h-auto m-6 p-2 bg-gray-50 rounded-md">
                <div className="flex justify-center">
                    <h1 className="font-bold text-2xl">Signup</h1>
                </div>
                <div className="flex justify-center text-center m-2 p-2">
                    <span>Enter your information to create an account</span>
                </div>

                <form>
                    <label htmlFor="firstName" className="font-semibold flex flex-row m-2">First Name</label>
                    <input type="text" id="firstName" placeholder="John" className="w-11/12 ml-2 p-1 border-slate-400 border-2" autoFocus onChange={(e) => setFirstname(e.target.value)} />
                    <label htmlFor="lastName" className="font-semibold flex flex-row m-2">Last Name</label>
                    <input type="text" id="lastName" placeholder="Doe" className="w-11/12 ml-2 p-1 border-slate-400 border-2" onChange={(e) => setLastName(e.target.value)} />
                    <label htmlFor="username" className="font-semibold flex flex-row m-2">Email</label>
                    <input type="email" id="username" placeholder="johndoe@gmail.com" className="w-11/12 ml-2 p-1 border-slate-400 border-2" onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="password" className="font-semibold flex flex-row m-2">Password</label>
                    <input type="password" id="password" placeholder="" className="w-11/12 ml-2 mb-6 p-1 border-slate-400 border-2" onChange={(e) => setPassword(e.target.value)} />
                    <div className="flex justify-center">
                        <button className="font-semibold flex justify-center hover:opacity-55 bg-slate-950 text-white w-11/12 text-center rounded-md" onClick={handleSignup}>Sign Up</button>
                    </div>
                </form>
                <div className="flex justify-center">
                    <span>Already have an account? <a href="" className="hover:cursor-pointer hover:opacity-30 underline" onClick={(e) => { e.preventDefault(); handleSignin(); }}>Login</a></span>
                </div>
            </div>
        </div>
    );
}