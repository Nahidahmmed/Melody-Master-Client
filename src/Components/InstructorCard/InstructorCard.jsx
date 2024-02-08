import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const InstructorCard = ({ instructor }) => {
  const {
    name,
    class: className,
    email,
    phone,
    office,
    office_hours,
    department,
    university,
    image,
  } = instructor;

  return (
    <div className="profile-card w-[350px] mx-auto rounded-md  shadow-xl overflow-hidden  relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center  gap-3 group">
      <div className="avatar w-[50%] h-[200px] pt-5 flex items-center justify-center flex-col">
        <img src={image} className="rounded-full" alt="" />
      </div>
      <div className="headings w-full pl-10">
        <p className="text-xl font-serif font-semibold text-[#434955]">
          {name}
        </p>
        <p className="text-sm font-semibold text-[#434955]">{className}</p>
      </div>
      <div className="w-full items-center justify-center flex">
        <ul className="flex flex-col text-left gap-2 pb-3 w-full pl-10">
          <li className="flex items-center">
            <FaPhoneAlt />
            <p className="pl-1">{phone}</p>
          </li>
          <li className="flex items-center">
            <FaEnvelope />
            <p className="pl-1">{email}</p>
          </li>

          <li className="flex items-center">
            <FaMapMarkerAlt />
            <p className="pl-1">{office}</p>
          </li>
        </ul>
      </div>
      <Link>
        <button className="relative overflow-hidden bg-gradient-to-br from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 mb-5">
          <span className="z-10 relative">Learn More</span>
        </button>
      </Link>
    </div>
  );
};

export default InstructorCard;
