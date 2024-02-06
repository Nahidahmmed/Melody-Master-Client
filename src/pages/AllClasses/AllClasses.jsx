import { useEffect, useState } from "react";
import ClassCard from "../../Components/ClassCard/ClassCard";
import "./AllClasses.css";
import Class_Image from "../../assets/music class image/image6.jpg";
import { Link } from "react-router-dom";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
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
    <div className="">
      <div className="relative">
        <img className="w-full h-[480px] object-cover" src={Class_Image} />
        <div className="absolute text-center top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30 p-4">
          <Link
            to="/"
            className="absolute top-24 left-4 bg-black bg-opacity-30 text-white px-4 py-2 rounded-full"
          >
            Home {">"}
            <span className="text-gray-400">All Classes</span>
          </Link>

          <h1 className="text-2xl sm:text-4xl mt-24 mb-2 w-[80%]">
            Explore a plethora of Music Classes.
          </h1>
          <p className="text-base sm:text-lg w-[80%]">
            Discover diverse music classes tailored to your interests and skill
            level. Whether you are a beginner or an experienced musician, explore
            guitar, piano, vocal, and more. Start your musical journey today!
          </p>
        </div>
      </div>

      <div className="grid gap-4 pl-12 lg:grid-cols-3 md:grid-cols-2 pt-24">
        {classes.map((item) => (
          <ClassCard item={item} key={item._id}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
