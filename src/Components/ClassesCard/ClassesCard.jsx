

const ClassesCard = ({ item }) => {
    return (
        <div className="card card-compact w-96 bg-gray-900 text-white shadow-xl">
            <figure><img className="w-[390px] h-[250px]" src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p className="text-lg">Instructor : {item.instructor}</p>
                <p className="font-semibold">Available seats: {item.availableSeats}</p>
                <p className="font-semibold">Price: ${item.price}</p>
                <div className="card-actions justify-end">
                    <button className="btn text-white bg-gray-900 hover:bg-white hover:text-gray-900">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;