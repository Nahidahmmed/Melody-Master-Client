import { useEffect, useState } from "react";
import ClassesCard from "../../Components/ClassesCard/ClassesCard";

const AllClasses = () => {
    const [classes, setClasses] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {setClasses(data) , setLoading(false)})
    }, [])
    console.log(classes);
    if(loading){
        return<span className="loading loading-bars loading-lg pt-96 ml-80 pl-52"></span>
    }
    return (
        <div className="py-20">
            <p className="font-bold text-center text-5xl py-12">All Classes</p>
            <div className="grid gap-4 pl-12 lg:grid-cols-3 md:grid-cols-2">
            {
                classes.map(item => <ClassesCard item={item} key={item._id}></ClassesCard>)
            }
        </div>
        </div>
    );
};

export default AllClasses;