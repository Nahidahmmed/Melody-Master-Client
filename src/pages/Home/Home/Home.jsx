
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import SliderSection from "../SliderSection/SliderSection";
import PopularInstructors from "../popularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div className="text-center text-xl">
            this is home
            <SliderSection></SliderSection>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>

            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;