import SomeUnfo from "../../../Components/SomeInfo/SomeUnfo";
import AboutUs from "../AboutUs/AboutUs";
import PopularClasses from "../PopularClasses/PopularClasses";
import SliderSection from "../SliderSection/SliderSection";
import ThankYou from "../ThankYou/ThankYou";
import PopularInstructors from "../popularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div >

            <SliderSection></SliderSection>
            
            <AboutUs></AboutUs>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <h1 className="text-5xl font-bold my-12 text-center">Some of our instruments</h1>
            <div className="md:flex">
           <ThankYou></ThankYou>
            </div>
            
            <SomeUnfo></SomeUnfo>
        </div>
    );
};

export default Home;