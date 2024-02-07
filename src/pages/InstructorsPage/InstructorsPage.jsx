import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import BannerImage from "../../assets/music class image/image5.jpg";

const InstructorsPage = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="pt-[25%] pb-[20%]">
        <div className="Container mx-auto">
          <div className="plate pl-3">
            <div className="black">
              <div className="border">
                <div className="white">
                  <div className="center"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="player">
            <div className="rect"></div>
            <div className="circ"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Banner
        tittle={"Meet Our Expert Instructors, Masters in Their Craft"}
        text={
          "Welcome to our instructor showcase, where expertise meets passion. Get to know the brilliant minds behind our courses, each a master in their field. "
        }
        image={BannerImage}
      ></Banner>
      <div className="grid pl-28 md:grid-cols-2 gap-4">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="card text-left card-side bg-base-100 shadow-xl w-[500px]"
          >
            <figure>
              <img className="w-52 h-60" src={instructor.image} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">{instructor.name}</h2>
              <small>{instructor.email}</small>
              <p>students: {instructor.numStudents}</p>
              <div className="card-actions">
                classes Taken: {instructor.classesTaken[0]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
