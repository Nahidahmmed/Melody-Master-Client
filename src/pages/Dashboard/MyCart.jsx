import Swal from "sweetalert2";
import UseCart from "../../Hooks/UseCart";
import { FaTrash } from "react-icons/fa";

const MyCart = () => {
    const [carts] = UseCart();
    
    const total = carts.reduce((sum, item) =>item.price + sum, 0)
    console.log(total);

    const handleDelete = (cart) =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
    return (
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
      </tr>
    </thead>
    <tbody>
      {carts.map((cart,index) => 
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
          <button onClick={()=> handleDelete(cart)} className="btn bg-gray-900 text-white w-8 h-7 items-center btn-xs hover:bg-red-700"><FaTrash></FaTrash></button>
        </th>
      </tr>
        )}
      
      
    </tbody>
  </table>
</div>
    );
};

export default MyCart;