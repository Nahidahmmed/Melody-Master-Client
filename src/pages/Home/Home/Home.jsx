
import Animetion from "../../../Components/Animetion/Animetion";
import SomeUnfo from "../../../Components/SomeInfo/SomeUnfo";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import SliderSection from "../SliderSection/SliderSection";
import PopularInstructors from "../popularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div className="text-center text-xl">
            <SliderSection></SliderSection>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <h1 className="text-5xl font-bold my-12">Some of our instruments</h1>
            <div className="md:flex">
            <ExtraSection></ExtraSection>
            <Animetion></Animetion>
            </div>
            <SomeUnfo></SomeUnfo>
        </div>
    );
};

export default Home;