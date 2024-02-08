import SomeUnfo from "../../../Components/SomeInfo/SomeUnfo";
import AboutUs from "../AboutUs/AboutUs";
import PopularClasses from "../PopularClasses/PopularClasses";
import SliderSection from "../SliderSection/SliderSection";
import ThankYou from "../ThankYou/ThankYou";
import PopularInstructors from "../popularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div>

            <SliderSection></SliderSection>
           <div className="max-w-screen-xl mx-auto">
           <AboutUs></AboutUs>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            
            <div className="md:flex">
           <ThankYou></ThankYou>
            </div>
            <SomeUnfo></SomeUnfo>
           </div>
        </div>
    );
};

export default Home;