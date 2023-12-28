import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const ClassesCard = ({ item }) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const addedClass = {addClassid: item._id,name:item.name, image:item.image, price: item.price, instructor:item.instructor,studentsNumber:item.studentsNumber,availableSeats:item.availableSeats,email:user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(addedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else{
            Swal.fire({
                title: 'please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:{from: location}})
                }
              })
        }
    }
    return (
        <div className="card card-compact w-96 bg-gray-900 text-white shadow-xl">
            <figure><img className="w-[390px] h-[250px]" src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p className="text-lg">Instructor : {item.instructor}</p>
                <p className="font-semibold">Available seats: {item.availableSeats}</p>
                <p className="font-semibold">Price: ${item.price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn text-white bg-gray-900 hover:bg-white hover:text-gray-900">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;