/* eslint-disable no-undef */
import { useState, useEffect, useRef } from "react";
import "./SliderSection.css";
import image1 from "../../../assets/music class image/image1.jpg";
import image2 from "../../../assets/music class image/image2.jpg";
import image3 from "../../../assets/music class image/image3.jpg";
import image4 from "../../../assets/music class image/image4.jpg";
const SliderSection = () => {
  const [timeRunning] = useState(3000);
  const [timeAutoNext] = useState(5000);
  // eslint-disable-next-line no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(null);

  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const timeRef = useRef(null);
  let runTimeOut;
  let runNextAuto;

  useEffect(() => {
    const handleNextClick = () => showSlider("next");
    const handlePrevClick = () => showSlider("prev");

    nextRef.current = document.getElementById("next");
    prevRef.current = document.getElementById("prev");
    carouselRef.current = document.querySelector(".carousel");
    sliderRef.current = carouselRef.current.querySelector(".carousel .list");
    thumbnailBorderRef.current = document.querySelector(".carousel .thumbnail");
    timeRef.current = document.querySelector(".carousel .time");

    thumbnailBorderRef.current.appendChild(
      thumbnailBorderRef.current.querySelectorAll(".item")[0]
    );

    nextRef.current.addEventListener("click", handleNextClick);
    prevRef.current.addEventListener("click", handlePrevClick);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    runNextAuto = setTimeout(() => {
      handleNextClick();
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAuto);
      nextRef.current.removeEventListener("click", handleNextClick);
      prevRef.current.removeEventListener("click", handlePrevClick);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    return () => clearTimeout(timeoutId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const showSlider = (type) => {
    const sliderItems = sliderRef.current.querySelectorAll(
      ".carousel .list .item"
    );
    const thumbnailItems = document.querySelectorAll(
      ".carousel .thumbnail .item"
    );

    if (type === "next") {
      sliderRef.current.appendChild(sliderItems[0]);
      thumbnailBorderRef.current.appendChild(thumbnailItems[0]);
      carouselRef.current.classList.add("next");
    } else {
      sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailBorderRef.current.prepend(
        thumbnailItems[thumbnailItems.length - 1]
      );
      carouselRef.current.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      handleNextClick();
    }, timeAutoNext);
  };
  return (
    <div className="carousel">
      <div className="list">
        <div className="item">
          <img src={image1} alt="" />
          <div className="content">
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
          <div className="content">
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
          <div className="content">
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
          <div className="content">
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

      <div className="thumbnail">
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

      <div className="arrows">
        <ul className="wrapper">
          <li className="icon black" ref={prevRef} id="prev">
            <span className="tooltip">Previous</span>
            <span>
              <svg
                viewBox="0 0 16 16"
                className="bi bi-chevron-double-left"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  fillRule="evenodd"
                ></path>
                <path
                  d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
          </li>
          <li className="icon black" ref={nextRef} id="next">
            <span className="tooltip">Next</span>
            <span>
              <svg
                viewBox="0 0 16 16"
                className="bi bi-chevron-double-right"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                  fillRule="evenodd"
                ></path>
                <path
                  d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
          </li>
        </ul>
        {/* <button ref={prevRef} id="prev">
          {"<"}
        </button>
        <button ref={nextRef} id="next">
          {">"}
        </button> */}
      </div>

      <div ref={timeRef} className="time"></div>
    </div>
  );
};

export default SliderSection;
