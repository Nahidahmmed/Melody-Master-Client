import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";


const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const showPassword = () => {
        setPasswordVisible(true)
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg px-10 py-8 max-w-md w-full">
                <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="font-medium mb-1 block">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="font-medium mb-1 block">
                            Password
                        </label>
                        <div className="flex">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                name="password"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                            <button onClick={showPassword} className="text-white bg-blue-500 w-9 flex justify-center items-center text-2xl rounded-r-lg"><AiOutlineEye></AiOutlineEye></button>

                        </div>
                    </div>

                    <input type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors" value="Login" />

                    <div> </div>
                </form>
                <div className="flex items-center justify-center mt-6">
                    <hr className="border-gray-300 flex-grow" />
                    <span className="text-gray-500 px-2">or</span>
                    <hr className="border-gray-300 flex-grow" />
                </div>
                <button
                    className="flex items-center text-3xl rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 mx-auto mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors "
                >
                    G
                </button>
            </div>
        </div>
    );
};

export default Login;