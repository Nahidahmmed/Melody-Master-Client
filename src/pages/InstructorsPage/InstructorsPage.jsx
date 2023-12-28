import { useEffect, useState } from "react";


const InstructorsPage = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <h1 className="font-bold text-5xl py-24 text-center">Our Instructors</h1>
             <div className="grid pl-28 md:grid-cols-2 gap-4">
            
            {
                instructors.map(instructor => <div key={instructor._id} className="card text-left card-side bg-base-100 shadow-xl w-[500px]">
                    <figure><img className="w-52 h-60" src={instructor.image} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{instructor.name}</h2>
                        <small >{instructor.email}</small>
                        <p>students: {instructor.numStudents}</p>
                        <div className="card-actions">
                        classes Taken: {
                            instructor.classesTaken[0]
                         }
                        </div>
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default InstructorsPage;