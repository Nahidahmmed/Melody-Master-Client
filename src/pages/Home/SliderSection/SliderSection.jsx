/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import "./SliderSection.css";
import image1 from "../../../assets/music class image/image1.jpg";
import image2 from "../../../assets/music class image/image2.jpg";
import image3 from "../../../assets/music class image/image3.jpg";
import image4 from "../../../assets/music class image/image4.jpg";
const SliderSection = () => {
  const [timeRunning] = useState(3000);
  const [timeAutoNext] = useState(7000);

  let runTimeOut;
  let runNextAuto;

  const showSlider = (type) => {
    const carouselDom = document.querySelector('.carousel');
    const SliderDom = document.querySelector('.carousel .list');
    const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    const thumbnailItemsDom = document.querySelectorAll(
      '.carousel .thumbnail .item'
    );

    if (type === 'next') {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add('next');
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove('next');
      carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);
  };

  useEffect(() => {
    runNextAuto = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);
  return (
    <div className="carousel w-[100%] md:w-full lg:w-full">
      <div className="list">
        <div className="item">
          <img src={image1} alt="" />
          <div className="content max-w-[70%] md:max-w-[80%] lg:max-w-[80%]">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={image2} alt="" />
          <div className="content max-w-[70%] md:max-w-[80%] lg:max-w-[80%] w">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={image3} alt="" />
          <div className="content max-w-[70%] md:max-w-[80%] lg:max-w-[80%] w">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={image4} alt="" />
          <div className="content max-w-[70%] md:max-w-[80%] lg:max-w-[80%] w">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="thumbnail left-[40%] lg:left-[40%]">
        <div className="item">
          <img src={image1} alt="" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={image2} alt="" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={image3} alt="" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={image4} alt="" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
      </div>

      <div className="arrows ml-[6%] lg:ml-[10%]">
      <button
          className="icon w-14 h-14"
          onClick={() => showSlider("prev")}
          id="prev"
        >
          {"<"}
        </button>
        <button
          className="icon w-14 h-14"
          onClick={() => showSlider("next")}
          id="next"
        >
          {">"}
        </button>
      </div>

      <div className="time"></div>
    </div>
  );
};

export default SliderSection;
