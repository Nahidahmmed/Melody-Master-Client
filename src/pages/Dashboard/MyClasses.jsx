import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const MyClasses = () => {
    const [classes, setClasses] = useState([])
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => { setClasses(data), setLoading(false) })
    }, [])

    const myClass = classes.filter(item => item.email == user?.email);
    const pending = myClass.filter(myItem => myItem.status === 'pending');
    const approve = myClass.filter(myItem => myItem.status === 'approve');
    if (loading) {
        return <span className="loading loading-bars loading-lg pt-96 ml-80 pl-52"></span>
    }

    return (
        <div>
            <div className="overflow-x-auto pt-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>price</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {pending.map((cart, index) =>
                            <tr className="font-semibold" key={cart._id}>
                                <th>
                                    {index + 1}
                                </th>

                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {cart.name}
                                </td>
                                <td>{cart.instructor}</td>
                                <td> ${cart.price}</td>
                                <th>
                                    {/* onClick={()=> handleDelete(cart)}  */}
                                    <p>{cart.status}</p>
                                </th>
                            </tr>
                        )}
                        {approve.map((cart, index) =>
                            <tr className="font-semibold" key={cart._id}>
                                <th>
                                    {index + 1}
                                </th>

                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {cart.name}
                                </td>
                                <td>{cart.instructor}</td>
                                <td> ${cart.price}</td>
                                <th>
                                    {/* onClick={()=> handleDelete(cart)}  */}
                                    <p>{cart.status}</p>
                                </th>
                            </tr>
                        )}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;