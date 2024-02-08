import React from 'react';

const InstructorCard = ({ instructor }) => {
  const { name, class: className, email, phone, office, office_hours, department, university, image } = instructor;

  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover rounded-t-lg" src={image} alt={name} />
      <div className="p-6">
        <div className="font-semibold text-xl text-gray-800 dark:text-white mb-2">{name}</div>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-2">{className}</p>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-2">{email}</p>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-2">{phone}</p>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-2">{office}</p>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-2">{office_hours}</p>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-2">{department}, {university}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
