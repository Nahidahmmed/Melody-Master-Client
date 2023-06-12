import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddClass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imgURL = imageResponse.data.display_url;
                    const { availableSeats, email, instructorName, name, price } = data;
                    const newItem = { name, price: parseFloat(price), instructor: instructorName, email, availableSeats, image: imgURL, status: 'pending' }
                    fetch('https://assignment12-server-nahidahmmed.vercel.app/classes', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newItem)
                    })
                        .then(res => res.json())
                        .then(data => {
                           if(data.insertedId){
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'your class is Added',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            reset();
                           }
                        })
                }

            })
    };
    console.log(errors);

    if(!user){
        return <span className="loading loading-bars loading-lg pt-96 ml-80 pl-52"></span>
    }




    return (
        <div className="mx-auto md:mt-1 mt-24 mb-8 w-3/5 bg-gray-800 p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 p-4">
                <div className="flex space-x-9">
                    <div>
                        <label htmlFor="className" className="block text-lg font-medium text-white">
                            Class name
                        </label>
                        <input
                            type="text"
                            id="className"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                            {...register("name", { required: true })}
                        />

                    </div>
                    <div>
                        <label htmlFor="classImage" className="block text-lg font-medium text-white">
                            Class Image
                        </label>
                        <input type="file"
                            className="file-input file-input-bordered w-full max-w-xs"
                            {...register("image", { required: true })} />

                    </div>
                </div>
                <div>
                    <label htmlFor="instructorName" className="block text-lg font-medium text-white">
                        Instructor name
                    </label>
                    <input
                        type="text"
                        id="instructorName"
                        required
                        defaultValue={user?.displayName}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-gray-100"
                        {...register("instructorName", { required: true })}
                    />
                    {errors.instructorName && <span className="text-red-600 font-semibold">This field is required</span>}
                </div>
                <div>
                    <label htmlFor="instructorEmail" className="block text-lg font-medium text-white">
                        Instructor email
                    </label>
                    <input
                        type="email"
                        id="instructorEmail"
                        defaultValue={user?.email}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-700 bg-gray-100"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="text-red-600 font-semibold">This field is required</span>}
                </div>
                <div className="flex space-x-4">
                    <div className="w-full">
                        <label htmlFor="availableSeats" className="block text-lg font-medium text-white">
                            Available seats
                        </label>
                        <input
                            type="number"
                            id="availableSeats"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                            {...register("availableSeats", { required: true })}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="price" className="block text-lg font-medium text-white">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                            {...register("price", { required: true })}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <input type="submit"
                        value="Add Class"
                        className="px-4 py-2 w-full font-bold text-white bg-gray-600 shadow-white rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-black" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;