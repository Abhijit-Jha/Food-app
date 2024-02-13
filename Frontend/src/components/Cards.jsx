import React from "react";
import { useState } from "react";

export default function Card({ title, description, imageUrl,price}) {
    const [count,setCount] = useState(0)
    function handleDecrement(){
        if (count>0){
            setCount(c=>c-1)
        } 
    }
    function handleIncrement(){
        setCount(c=>c+1) 
    }
    return (
        <div className="shadow-xl grid w-72 h-96 m-10 grid-col-1 p-3 rounded-xl hover:opacity-90 hover:scale-110">
            <img src={imageUrl} alt={`${title} Image`} className="w-full h-full object-cover" />
            <div className="flex justify-between m-2">
            <div >{title}</div>
            <span className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            {price}</span>
            </div>
            <span className="font-light p-2">{description}</span>
            <div className="flex justify-evenly">
                <div className="flex">
                <button className="border-4 border-white  w-8 h-8" onClick={handleDecrement}>-</button>
                <div className="flex justify-center text-center w-12 ">{count}</div>
                <button className="border-4 border-white w-8 h-8" onClick={handleIncrement}>+</button>
                </div>
                <button className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
