import { Link } from "react-router-dom";

const ClassCard = ({ item }) => {
  return (
    <div className="max-w-sm mx-auto mb-8">
      <div className="bg-white rounded-lg overflow-hidden shadow-md mx-auto max-w-sm h-full flex flex-col transition duration-300 transform hover:scale-105">
        <img
          src={item.class_image}
          alt={item.class_name}
          className="w-full h-48 object-cover object-center rounded-t-lg"
        />
        <div className="p-6 h-full flex flex-col">
          <div className="font-bold text-xl mb-2 text-gray-800">
            {item.class_name}
          </div>
          <p className="text-gray-600 text-base flex-grow">
            {item.class_description}
          </p>
          <div className="border-t border-gray-200 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={item.instructor.instructor_image}
                alt={item.instructor.instructor_name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <p className="text-gray-700">{item.instructor.instructor_name}</p>
            </div>
            <Link to={`/detail/${item._id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
