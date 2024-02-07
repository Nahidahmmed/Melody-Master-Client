import { useLoaderData } from "react-router-dom";

function ClassDetail() {
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
    <div className="bg-white shadow-md rounded-lg overflow-hidden py-24">
      <div className="lg:flex lg:flex-wrap">
        <img className="lg:w-1/2 h-64 lg:h-auto object-cover object-center" src={class_image} alt={class_name} />
        <div className="lg:w-1/2 p-6">
          <h2 className="text-2xl font-semibold mb-4">{class_name}</h2>
          <p className="text-gray-700 mb-4">{class_description}</p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4 flex items-center">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src={instructor.instructor_image}
              alt={instructor.instructor_name}
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Instructor: {instructor.instructor_name}
              </h3>
              <p className="text-gray-700 mb-2">
                {instructor.instructor_bio}
              </p>
              <p className="text-gray-700 mb-2">
                Contact: {instructor.instructor_email}
              </p>
            </div>
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
          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassDetail;
