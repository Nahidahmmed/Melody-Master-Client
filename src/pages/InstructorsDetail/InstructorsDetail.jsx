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
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" items-center">
          <img
            src={image}
            alt={name}
            className="rounded-full w-48 h-48 mb-4 shadow-lg"
          />
          <h2 className="text-4xl font-semibold mb-2 text-center">{name}</h2>
          <p className="text-xl text-gray-600 text-center">{className}</p>
        </div>
        <div className="mt-8">
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
              <p>{officeHours}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-3xl font-semibold mb-4">About {name}</h3>
        <p className="text-lg">{bio}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-semibold mb-4">
          Experience and Expertise
        </h3>
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Department:</span> {department}
          </p>
          <p>
            <span className="font-semibold">University:</span> {university}
          </p>
          <p>
            <span className="font-semibold">Main Instrument:</span> {instrument}
          </p>
          <p>
            <span className="font-semibold">Years of Experience:</span>{" "}
            {experience}
          </p>
          <p>
            <span className="font-semibold">Performance Experience:</span>{" "}
            {performance}
          </p>
          <p>
            <span className="font-semibold">Teaching Approach:</span> {approach}
          </p>
          <p>
            <span className="font-semibold">Student Achievements:</span>{" "}
            {achievements}
          </p>
        </div>
      </div>
    </div>
  );
}
