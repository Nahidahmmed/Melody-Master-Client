import { useEffect, useState } from "react";
import ClassCard from "../../../Components/ClassCard/ClassCard";


const PopularClasses = () => {
    const [classes , setClasses] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/PopularClasses')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])

    console.log(classes);
    return (
        <div>
            <h1 className="font-bold text-5xl my-12">Popular Classes</h1>
            <div className="grid gap-8 pl-9 md:grid-cols-3">
            
            {
                classes.map(item => <ClassCard key={item._id} item={item}></ClassCard>)
            }
        </div>
        </div>
    );
};

export default PopularClasses;