import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";



const Main = () => {
    return (
        <div className="w-full min-h-screen">
            <div className="w-full fixed z-10">
                
            <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;