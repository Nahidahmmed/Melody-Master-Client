import { useContext, } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";



const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user?.photoURL);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const options = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/instructors">Instructors</Link>
        </li>
        <li>
            <Link to="/allClasses">Classes</Link>
        </li>



        {
            user ? <>
                <li>
                    <Link to="/dashboard/myCart">Dashboard</Link>
                </li>
                <li>
                    <div className="avatar">
                        <div className="w-7 rounded-full">
                            <img className="" src={user?.photoURL} />
                        </div>
                    </div>
                </li>
                <li>
                    <button onClick={handleLogout} className="btn btn-sm  hover:text-white">Logout</button>
                </li>
            </> : <>
                <li>
                    <Link to="/login" className="btn btn-sm  text-white bg-gray-900 hover:bg-white hover:text-gray-900">Login</Link>
                </li>
            </>
        }

    </>


    // const handleLogout (event) => {
    //     event.preventdefault()
    // }
    return (
        <div className="navbar fixed z-10 max-w-[1350px] bg-gray-900 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52">
                        {options}
                    </ul>

                </div>
                <a className="btn btn-ghost normal-case text-xl">Melody Masters</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal py-1 mt-1 px-1">
                    {options}
                </ul>
            </div>
        </div>
    );
};

export default Header;