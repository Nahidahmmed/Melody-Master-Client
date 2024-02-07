import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/banner/Banner";


export default function ClassDetail() {
    const classData = useLoaderData();
    const {
        class_name,
        class_description,
        instructor,
        schedule,
        number_of_students,
        class_image,
        class_location,
        class_duration,
        class_cost,
        class_prerequisites,
        class_curriculum,
        class_materials,
        equipment_requirements,
      } = classData;
  return (
    <div className="max-w-full bg-white shadow-md rounded-xl overflow-hidden">
      <Banner image={class_image} tittle={class_name} text={class_description} route={class_name}></Banner>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">{class_name}</h2>
        <p className="text-gray-700 mb-4">{class_description}</p>
        <div className="border-t border-gray-300 pt-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Instructor: {instructor.instructor_name}</h3>
          <p className="text-gray-700 mb-2">{instructor.instructor_bio}</p>
          <img className="w-16 h-16 rounded-full" src={instructor.instructor_image} alt={instructor.instructor_name} />
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Schedule:</h3>
          <p className="text-gray-700">Day: {schedule.day}</p>
          <p className="text-gray-700">Time: {schedule.time}</p>
          <p className="text-gray-700">Timezone: {schedule.timezone}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Class Details:</h3>
          <p className="text-gray-700">Location: {class_location}</p>
          <p className="text-gray-700">Duration: {class_duration}</p>
          <p className="text-gray-700">Cost: {class_cost}</p>
          <p className="text-gray-700">Number of Students: {number_of_students}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Prerequisites:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {class_prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Curriculum:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {class_curriculum.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Materials:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {class_materials.map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
        </div>
        <p className="text-gray-700">{equipment_requirements}</p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enroll Now
        </button>
      </div>
    </div>
  )
}
