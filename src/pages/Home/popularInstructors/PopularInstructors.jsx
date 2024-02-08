import { useEffect, useState } from "react";
import InstructorCard from "../../../Components/InstructorCard/InstructorCard";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/PopularInstructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data), setLoading(false));
  }, []);
  return (
    <div className="">
      <h1 className="font-bold text-5xl my-12">Popular Instructors</h1>
      <div className="grid md:grid-cols-3">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
