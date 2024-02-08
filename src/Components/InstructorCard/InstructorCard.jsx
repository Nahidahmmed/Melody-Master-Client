import React from 'react';

const InstructorCard = ({ instructor }) => {
  const { name, class: className, email, phone, office, office_hours, department, university, image } = instructor;

  return (
    <div
  className="profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
>
  <div
    className="avatar w-[50%] h-[200px] pt-5 flex items-center justify-center flex-col gap-1"
  >
    <img src={image} className='rounded-full' alt="" />
  </div>
  <div className="headings w-full pl-10">
    <p className="text-xl font-serif font-semibold text-[#434955]">{name}</p>
    <p className="text-sm font-semibold text-[#434955]">{className}</p>
  </div>
  <div className="w-full items-center justify-center flex">
    <ul
      className="flex flex-col text-left gap-2 pb-3 w-full pl-10"
    >
      <li className='flex'>
        <svg
          id="phone"
          viewBox="0 0 24 24"
          className="fill-stone-700 group-hover:fill-[#58b0e0]"
          height="15"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0V0z" fill="none"></path>
          <path
            d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
          ></path>
        </svg>
        <p>{phone}</p>
      </li>
      <li className='flex'>
        <svg
          className="fill-stone-700 group-hover:fill-[#58b0e0]"
          height="15"
          width="15"
          id="mail"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
            fill="#231f20"
          ></path>
          <path
            d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
            fill="#231f20"
          ></path>
        </svg>
        <p>{email}</p>
      </li>
      
      <li className='flex'>
        <svg
          id="map"
          viewBox="0 0 16 16"
          className="fill-stone-700 group-hover:fill-[#58b0e0]"
          height="15"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
            fill="#444"
          ></path>
        </svg>
        <p>{office}</p>
      </li>
    </ul>
  </div>
</div>

  );
};

export default InstructorCard;
