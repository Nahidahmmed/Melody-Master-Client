import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";



const ManageClass = () => {

    // const [classes, setClasses] = useState([])
    // const [loading, setLoading] = useState(true);
    

    // useEffect(() => {
    //     setLoading(true)
    //     fetch('https://assignment12-server-nahidahmmed.vercel.app/classes')
    //         .then(res => res.json())
    //         .then(data => {setClasses(data) , setLoading(false)})
    // }, [])
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://assignment12-server-nahidahmmed.vercel.app/classes')
        return res.json();
    })


    const pending = classes.filter(myItem => myItem.status === 'pending');
    const approve = classes.filter(myItem => myItem.status === 'approve');


    const handleApprove = (cart) =>{
        console.log(cart);
        fetch(`https://assignment12-server-nahidahmmed.vercel.app/classes/approve/${cart._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${cart.name} is Approved!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        
    }
    const handleDenied = (cart) =>{
        console.log(cart);
        fetch(`https://assignment12-server-nahidahmmed.vercel.app/classes/denied/${cart._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${cart.name} is denied!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div>
            <div className="overflow-x-auto pt-6">
                <table className="table">
                    {/* head */}
                    <thead className="space-x-4">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>price</th>
                            <th></th>
                            <th></th>
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
                                <td>{cart.email}</td>
                                <td>{cart.availableSeats}</td>
                                <td> ${cart.price}</td>
                                <td>
                                {cart.status === 'pending' ? <button className="btn btn-sm btn-disabled">pending</button> : <button className="btn btn-sm text-white bg-gray-700 hover:bg-gray-900">pending</button>}
                                    
                                </td>
                                <td>
                                    {/* onClick={()=> handleDelete(cart)}  */}
                                    <button onClick={()=> handleApprove(cart)} className="btn btn-sm text-white bg-gray-700 hover:bg-gray-900">Approve</button>
                                </td>
                                <td>
                                    {/* onClick={()=> handleDelete(cart)}  */}
                                    <button onClick={()=> handleDenied(cart)} className="btn btn-sm text-white bg-gray-700 hover:bg-gray-900">denied</button>
                                </td>
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
                                <td>{cart.email}</td>
                                <td>{cart.availableSeats}</td>
                                <td> ${cart.price}</td>
                                <td>
                                    {cart.status === 'pending' ? <button className="btn btn-sm btn-disabled">pending</button> : <button className="btn btn-sm text-white bg-gray-700 hover:bg-gray-900">pending</button>}
                                    
                                </td>
                                <td>
                                    {cart.status === 'approve' ?<button onClick={()=> handleApprove(cart)} className="btn btn-sm   btn-disabled">Approve</button>:<button onClick={()=> handleApprove(cart)} className="btn btn-sm text-white bg-gray-700 hover:bg-gray-900">Approve</button>}
                                    
                                </td>
                                <td>
                                    {/* onClick={()=> handleDelete(cart)}  */}
                                    <button onClick={()=> handleDenied(cart)} className="btn btn-sm text-white bg-gray-700 hover:bg-gray-900">denied</button>
                                </td>
                            </tr>
                        )}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;