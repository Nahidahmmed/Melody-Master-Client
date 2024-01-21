/* eslint-disable react/jsx-key */
import { useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { Tooltip } from "@nextui-org/react";
import { FaPhone,FaMusic } from "react-icons/fa6";
import {
  FaRegEnvelope,
  FaFacebook,
  FaFlickr,
  FaInstagram,
  FaLock,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import "./Header/Header.css"

const Header = () => {
  // const { user, logOut } = useContext(AuthContext);
  // const handleLogout = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch((err) => console.log(err));
  // };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const menuItems = [
    <li>
      <Link className="Button" to="/">Home</Link>
    </li>,
    <li>
      <Link className="Button" to={'/instructors'}>Instructors</Link>
    </li>,
    <li>
      <Link className="Button" to="/allClasses">Classes</Link>
    </li>,
    <li>
    <Link className="Button" to="/dashboard/myCart">Dashboard</Link>
  </li>,
   
       
            
              // <div className="avatar">
              //   <div className="w-7 rounded-full">
              //     <img className="" src={user?.photoURL} />
              //   </div>
              // </div>
        
       
  ];
  return (
    <div>
      <div className="bg-black bg-opacity-60 lg:h-14 text-white p-4 flex pt-7">
        <h1 className="lg:flex lg:gap-2 lg:items-center lg:font-semibold lg:text-base lg:pl-10 hidden">
          <FaPhone></FaPhone> <span>+088 01533175945</span>
        </h1>
        <h1 className="lg:flex hidden lg:gap-2 lg:items-center lg:text-base lg:font-semibold lg:pl-10">
          <FaRegEnvelope></FaRegEnvelope> <span>nahidahmmed411@gmail.com</span>
        </h1>
        <div className="text-[#3081D0] gap-3 lg:ml-auto flex text-xl">
          <Tooltip placement={"top"} content="facebook">
            <button>
              <FaFacebook></FaFacebook>
            </button>
          </Tooltip>
          <Tooltip placement={"top"} content="flicker">
            <button>
              <FaFlickr></FaFlickr>
            </button>
          </Tooltip>
          <Tooltip placement={"top"} content="instagram">
            <button>
              <FaInstagram></FaInstagram>
            </button>
          </Tooltip>
        </div>
        <div className="flex items-center lg:mx-14 ml-32 text-base font-semibold">
          <Link className="flex items-center gap-2 mx-2">
            <FaLock className="text-[#3081D0]"></FaLock> Login
          </Link>
          <Link className="flex items-center gap-2">
            <FaUser className="text-[#3081D0]"></FaUser> Sign Up
          </Link>
        </div>
      </div>
      <div className="bg-black bg-opacity-60 lg:h-24 text-white p-4">
        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center space-x-4">
            <div className="group relative">
              <button
                onClick={toggleMenu}
                className="btn btn-ghost lg:hidden focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mt-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <ul className="mt-[17px] z-10 p-2 shadow bg-black bg-opacity-40 rounded-box w-52 absolute">
                  {menuItems}
                </ul>
              )}
            </div>
            <Link to={"/"} className="btn btn-ghost text-3xl flex items-center">
              <FaMusic className="mr-3"></FaMusic>{" "}
              <span className="text-[#3081D0] mr-2">Melody</span>Master
            </Link>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex gap-6">
              {menuItems}
            </ul>
          </div>

          <div className="text-xl pr-5 lg:pr-12">
            <FaSearch></FaSearch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
