import { NavLink, Outlet } from "react-router-dom";
import Header from "../../pages/Shared/Header";
import Footer from "../../pages/Shared/Footer";
import { BsFillCartFill,BsFillBagCheckFill,BsWalletFill,BsFillHouseDoorFill,BsCardText } from 'react-icons/Bs';
import logo from '../../assets/307380621_609154877573913_2533658308514740888_n.jpg';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="pt-18 drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu space-y-2  pt-20 bg-gray-800 text-white p-4 w-80 h-full">
                        <img src={logo} alt="" className="w-36 mx-auto" />                        

                     
                        <li className="bg-gray-700 rounded hover:font-bold"><NavLink to="myCart"><BsFillCartFill></BsFillCartFill> My Selected Classes</NavLink></li>
                        <li className="bg-gray-700 rounded hover:font-bold"><NavLink><BsFillBagCheckFill></BsFillBagCheckFill>My Enrolled Classes</NavLink></li>
                        <li className="bg-gray-700 rounded hover:font-bold"><NavLink><BsWalletFill></BsWalletFill>payment history</NavLink></li>
                        <div className="divider text-white">or</div>
                        <li className="mt-5 bg-gray-700 rounded hover:font-bold "><NavLink to="/"><BsFillHouseDoorFill></BsFillHouseDoorFill>Home</NavLink></li>
                        <li className="bg-gray-700 rounded hover:font-bold"><NavLink to="/allClasses"><BsCardText></BsCardText>Classes</NavLink></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;