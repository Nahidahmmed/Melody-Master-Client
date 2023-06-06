import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    const [loggedIn, setLoggedIn] = useState(true)


    const options = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link>Instructors</Link>
        </li>
        <li>
            <Link>Classes</Link>
        </li>
        <li>
            <Link to="/login">Dashboard</Link>
        </li>
        <li>
        <img
                src={''}
                alt="User Profile"
                className="w-8 h-8 rounded-full"
              />
        </li>

    </>


    // const handleLogout (event) => {
    //     event.preventdefault()
    // }
    return (
        <div className="navbar bg-gray-900 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        
                            { options } : 
                            
                            
                    </ul>

                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {options}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Header;