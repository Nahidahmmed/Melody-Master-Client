/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

import { FaMusic } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import "./Header/Header.css";

const Header = () => {
  // const { user, logOut } = useContext(AuthContext);
  // const handleLogout = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch((err) => console.log(err));
  // };
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const menuItems = [
    <li>
      <Link className="Button" to="/">
        Home
      </Link>
    </li>,
    <li>
      <Link className="Button" to={"/instructors"}>
        Instructors
      </Link>
    </li>,
    <li>
      <Link className="Button" to="/allClasses">
        Classes
      </Link>
    </li>,
    <li>
      <Link className="Button" to="/dashboard/myCart">
        Dashboard
      </Link>
    </li>,

    // <div className="avatar">
    //   <div className="w-7 rounded-full">
    //     <img className="" src={user?.photoURL} />
    //   </div>
    // </div>
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchTerm(inputText);
    const filteredSuggestions =
      inputText !== ""
        ? classes.filter((Class) =>
            Class.class_name.toLowerCase().startsWith(inputText.toLowerCase())
          )
        : [];

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (selectedCountry) => {
    setSearchTerm(selectedCountry.class_name);
    setSuggestions([]);
  };
  return (
    <div className="absolute z-50 w-full bg-black bg-opacity-60 lg:h-[85px] text-white p-4">
      <div className="flex items-center justify-between pt-3">
        <div className="flex items-center space-x-4">
          <div className="group relative">
            <button
              onClick={toggleMenu}
              className="lg:hidden focus:outline-none"
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
              <ul className="mt-[28px] z-10 p-2 shadow bg-black bg-opacity-80 rounded w-52 absolute">
                {menuItems}
              </ul>
            )}
          </div>
          <Link to={"/"} className="lg:text-3xl text-lg flex items-center">
            <FaMusic className="mr-3"></FaMusic>
            <span className="text-[#3081D0] mr-2">Tempo</span>Tutors
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex gap-6">{menuItems}</ul>
        </div>

        <div className="text-xl lg:pr-2 flex items-center">
          {/* input */}
          <div className="container border-b-2">
            <div className="mainbox lg:w-[230px]">
              <div className="iconContainer">
                <button onClick={toggleSearch}>
                  <FaSearch className="w-9" />
                </button>
              </div>
              <input
                className="search_input w-[120px] lg:w-[185px]"
                placeholder="search"
                name="search"
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
              />
            </div>
            {suggestions.length > 0 && (
              <ul className="lg:w-[230px] w-[160px] mt-[1px] lg:mt-[123px] text-sm mr-10 p-3 shadow bg-black bg-opacity-60 rounded-b-xl absolute">
                {suggestions.slice(0, 8).map((Class, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(Class)}>
                    <button className="pb-2">{Class.class_name}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* profile */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
