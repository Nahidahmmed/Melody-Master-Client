import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import piano from '../../../assets/piano img.webp';
import Trumpet from '../../../assets/images.jpg';
import drum from '../../../assets/drums-1.jpg';
import flute from '../../../assets/flut img.jpg';
import getter from '../../../assets/giter img2.jpg';
import violin from '../../../assets/violin img.jpeg';

const SliderSection = () => {
    return (
       <div className="pt-16">
         <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img className="w-[1400px] h-[500px]" src={violin} alt="" />
                <div className="-mt-80 text-left pl-12 text-white font-semibold w-2/3">
                    <h1 className="text-4xl mb-3"> The Violin Class</h1>
                    <p>
                        The violin is a string instrument that is played with a bow. It belongs to the family of bowed string instruments, which also includes the viola, cello, and double bass. The violin is renowned for its beautiful and expressive sound, and it is widely used in classical music, as well as in various other genres such as folk, jazz, and popular music.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-[1400px] h-[500px]" src={drum} alt="" />
                <div className="-mt-80 text-left pl-12 text-white font-semibold w-2/3">
                    <h1 className="text-4xl mb-3"> The Drum Class</h1>
                    <p>
                        Drums are musical instruments that produce sound by the vibration of a stretched membrane known as a drumhead or drum skin. They belong to the percussion family and are one of the oldest known instruments in the world, with evidence of drum-like instruments dating back thousands of years.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-[1400px] h-[500px]" src={flute} alt="" />
                <div className="-mt-80 text-left pl-12 text-white font-semibold w-2/3">
                    <h1 className="text-4xl mb-3"> The Flute Class</h1>
                    <p>
                        The flute is a musical instrument belonging to the woodwind family. It is one of the oldest and most widely used instruments in the world. Flutes are known for their distinct sound and their ability to produce a wide range of tones and melodies.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-[1400px] h-[500px]" src={getter} alt="" />
                <div className="-mt-80 text-left pl-12 text-white font-semibold w-2/3">
                    <h1 className="text-4xl mb-3"> The guitar Class</h1>
                    <p>The guitar is a popular musical instrument that belongs to the chordophone family. It typically features a flat-bodied structure with a long fretted neck and six strings, although there are variations with more or fewer strings. The strings are usually plucked or strummed with the fingers or a pick to produce sound.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className="h-[500px]" src={piano} alt="" />
                <div className="-mt-80 text-left pl-12 text-white font-semibold w-2/3">
                    <h1 className="text-4xl mb-3"> The Piano Class</h1>
                    <p>The piano is a versatile and widely recognized musical instrument that belongs to the keyboard family. It produces sound by striking strings with hammers when keys are pressed.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-[1400px] h-[500px]" src={Trumpet} alt="" />
                <div className="-mt-80 text-left pl-12 text-white font-semibold w-2/3">
                    <h1 className="text-4xl mb-3"> The Trumpet Class</h1>
                    <p>The trumpet is a majestic brass instrument that commands attention with its brilliant and powerful sound. With a history dating back thousands of years, it has evolved into a versatile instrument capable of captivating audiences across genres and cultures. From its ancient origins in civilizations like Egypt and Rome to its modern form with valves, the trumpet has retained its timeless appeal. Whether soaring through the melodies of classical symphonies, jazz improvisations, or thrilling fanfares</p>
                </div>
            </SwiperSlide>

        </Swiper>
       </div>
    );
};

export default SliderSection;