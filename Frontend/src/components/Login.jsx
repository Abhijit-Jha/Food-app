// import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export  function Login(){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("") 
    const navigate = useNavigate()
    const handleSignup=()=>{
        navigate("/signup")
    }
    const handleLogin= async ()=>{
        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
            username,
            password
        })
        navigate("/dashboard")
    }
    
    return <>
        <div className="flex justify-center m-20">
            <div className="shadow-2xl w-auto h-auto m-12 p-2 bg-gray-50 rounded-md">
                <div className="flex justify-center">
                    <h1 className="font-bold text-2xl">Signin</h1>
                </div>
                <div className="flex justify-center text-center m-2 p-2">
                    <span>Enter your information to Login</span>
                </div>

                <form>
                    <label htmlFor="username" className="font-semibold flex flex-row m-2">Email</label>
                    <input type="email" id="username" placeholder="johndoe@gmail.com" className="w-11/12 ml-2 p-1 border-slate-400 border-2" onChange={(e)=>{setUsername(e.target.value)}} />
                    <label htmlFor="password" className="font-semibold flex flex-row m-2">Password</label>
                    <input type="password" id="password" placeholder="" className="w-11/12 ml-2 mb-6 p-1 border-slate-400 border-2" onChange={(e)=>{setPassword(e.target.value)}} />
                    <div className="flex justify-center">
                        <button className="font-semibold flex justify-center hover:opacity-55 bg-slate-950 text-white w-11/12 text-center rounded-md" onClick={handleLogin}>Login</button>
                    </div>
                </form>
                <div className="flex justify-center">
                    <span>Dont have an account? <a href="" className="hover:cursor-pointer hover:opacity-30 underline" onClick={handleSignup} >Create new</a></span>
                </div>
            </div>
        </div>
    </>
}