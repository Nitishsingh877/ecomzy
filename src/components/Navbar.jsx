import React from "react";
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import img from './logo.png';
import { useSelector } from "react-redux";

const Navbar = () => {

    const {cart} = useSelector((state) => state);
    return(
        <div className= "bg-blue-900" >
            <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
                <NavLink to="/">
                <div className="ml-5">
                    <img  src={img} className="h-14"></img>
                </div>
                </NavLink>
                <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                <NavLink to="/">
                <div>
                    <p>Home</p>
                </div>
                </NavLink>
                   
                <NavLink to="/cart">
                <div className="relative">
                    <BsCart4  className="text-2xl" />
                    {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                </div>
                </NavLink>
                    
                </div>

            </div>
        </div>
    )
}

export default Navbar;