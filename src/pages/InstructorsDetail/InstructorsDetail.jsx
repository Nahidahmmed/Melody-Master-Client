import React from "react";
import { useLoaderData } from "react-router-dom";

export default function InstructorsDetail() {
  const instructor = useLoaderData();
  const {
    name,
    class: className,
    email,
    phone,
    office,
    office_hours: officeHours,
    department,
    university,
    image,
    instrument,
    years_of_experience: experience,
    bio,
    performance_experience: performance,
    teaching_approach: approach,
    student_achievements: achievements,
  } = instructor;
  return (
    <div className="lg:pt-[150px] pt-[130px] max-w-screen-xl ml-4 mx-auto">
      <div className="lg:flex">
        <div className="lg:flex items-center mb-8 lg:mr-32 lg:w-[50%]">
          <img
            src={image}
            alt={name}
            className="w-48 h-48 rounded-full object-cover"
          />
          <div className="">
            <h1 className="text-3xl font-bold mb-3 lg:mt-0 mt-5">{name}</h1>
            <p className="text-xl font-semibold">{className}</p>
            <p className="text-lg font-semibold">
              {department}, {university}
            </p>
            <p className="text-base font-semibold">
              Years of Experience: <span className="">{experience}</span>
            </p>
            <p className="text-base font-semibold">Instrument: {instrument}</p>
          </div>
        </div>
        <div className="mt-3 lg:w-[50%]">
          <h3 className="text-3xl font-semibold mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Email:</p>
              <p>{email}</p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p>{phone}</p>
            </div>
            <div>
              <p className="font-semibold">Office:</p>
              <p>{office}</p>
            </div>
            <div>
              <p className="font-semibold">Office Hours:</p>
              <p className="w-[60%]">{officeHours}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="space-y-4 lg:w-[50%] mt-10">
          <h3 className="text-3xl font-semibold mb-4">About {name}</h3>
          <p className="text-lg">{bio}</p>
        </div>
        <div className=" my-10">
          <h3 className="text-3xl font-semibold mb-2">
            Experience and Expertise
          </h3>
          <div className="space-y-2">
            <p className="text-base">
              <span className="font-semibold text-base">Department:</span>{" "}
              {department}
            </p>
            <p className="text-base">
              <span className="font-semibold text-base">University:</span>{" "}
              {university}
            </p>
            {instrument && (
              <p className="text-base">
                <span className="font-semibold text-base">
                  Main Instrument:
                </span>{" "}
                {instrument}
              </p>
            )}
            <p className="text-base">
              <span className="font-semibold text-base">
                Years of Experience:
              </span>{" "}
              {experience}
            </p>
            {performance && (
              <p className="text-base">
                <span className="font-semibold text-base">
                  Performance Experience:
                </span>{" "}
                {performance}
              </p>
            )}
            <p className="text-base">
              <span className="font-semibold text-base">
                Teaching Approach:
              </span>{" "}
              {approach}
            </p>
            {achievements && (
              <p className="text-base">
                <span className="font-semibold text-base">
                  Student Achievements:
                </span>{" "}
                {achievements}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
