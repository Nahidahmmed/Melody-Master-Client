import { useEffect, useState } from "react";
import ClassCard from "../../../Components/ClassCard/ClassCard";


const PopularClasses = () => {
    const [classes, setClasses] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('https://assignment12-server-nahidahmmed.vercel.app/PopularClasses')
            .then(res => res.json())
            .then(data => {setClasses(data) , setLoading(false)})
    }, [])

    if (loading) {
        return <span className="loading loading-bars loading-lg pt-96 ml-80 pl-52"></span>
    }

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