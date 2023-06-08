

const ClassCard = ({item}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full h-60">
            <figure><img src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-left text-3xl">{item.name}</h2>
                <p className="text-left">Students: {item.studentsNumber}</p>
                <p className="text-left">Available Seats: {item.availableSeats}</p>
                <div className="card-actions text-left">
                    <p>instructor: {item.instructor}</p>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;