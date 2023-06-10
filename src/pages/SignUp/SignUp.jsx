import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { saveUser } from "../../Hooks/SaveUser";




const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const showPassword = () => {
        setPasswordVisible(true)
    }
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                // set user to db
                console.log(res.user);
                saveUser(res.user)
                navigate(from, {replace: true});
            })
            .catch(error => console.log(error))
    }


    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                       
                        saveUser(result.user)
                        navigate(from, {replace: true});

                    }).catch((error) => {
                        console.log(error);
                    });
            })
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg px-10 py-8 max-w-md w-full">
                <h2 className="text-3xl font-bold mb-6 text-center">Sign up Here</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            name="name"
                            {...register("name", { required: true })}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="your Name"
                        />
                        {errors.name && <span className="text-red-600 font-semibold">This field is required</span>}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            {...register("email", { required: true })}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="your email"
                        />
                        {errors.email && <span className="text-red-600 font-semibold">This field is required</span>}
                    </div>
                    <div>
                        <div className="flex">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                name="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])/
                                })}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="your password"
                            />
                            <button onClick={showPassword} className="text-white bg-blue-500 w-9 flex justify-center items-center text-2xl rounded-r-lg"><AiOutlineEye></AiOutlineEye></button>

                        </div>
                        {errors.password?.type === "required" && <span className="text-red-600 font-semibold">password required</span>}
                        {errors.password?.type === "minLength" && <span className="text-red-600 font-semibold">password must be 6 characters</span>}
                        {errors.password?.type === "pattern" && <span className="text-red-600 font-semibold"> do not have a capital letter,do not have a special character</span>}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="photo"
                            {...register("photo", { required: true })}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="your Photo URL"
                        />
                    </div>
                    {errors.photo && <span className="text-red-600 font-semibold">This field is required</span>}


                    <input type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors" value="Sign up" />

                    <div> </div>
                </form>
                <span className="text-blue-500">Already Have an Account? <Link to="/login" className="text-blue-700 font-semibold">Login</Link></span>
                <div className="flex items-center justify-center mt-6">

                    <hr className="border-gray-300 flex-grow" />
                    <span className="text-gray-500 px-2">or</span>
                    <hr className="border-gray-300 flex-grow" />
                </div>
                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center text-3xl rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 mx-auto mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors "
                >
                    G
                </button>
            </div>
        </div>
    );
};

export default SignUp;