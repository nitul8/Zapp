import React from "react";
import {Link} from "react-router-dom";
import {FaRegUserCircle} from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="w-full flex justify-between bg-black text-white h-20 items-center fixed">
            <div className="mx-10 my-6 flex items-center">
                <img src="/logo.png" alt="Zapp" className="h-16" />
                <p className="text-4xl">app</p>
            </div>
            <div className="mx-10 my-6 flex items-center text-xl space-x-20">
                <Link to="/">Home</Link>
                <Link to="/" className="ml-4">
                    About
                </Link>
                <Link to="/" className="ml-4">
                    Contact
                </Link>
                <Link to="/" className="ml-4">
                    <FaRegUserCircle className="text-4xl" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
