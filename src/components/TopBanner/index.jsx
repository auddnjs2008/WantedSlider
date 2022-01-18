import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useInterval from "../../hooks/useInterval";
import imgSliders from "../../imgSliderData";
import BannerElement from "../BannerElement";
import { Container, SlickList, SlickSlider } from "./styles";

const TopBanner = () => {
  const [sliderNumber, setSliderNumber] = useState(1);
  const [initMove, setInitMove] = useState(
    window.innerWidth * 0.7 - (window.innerWidth - window.innerWidth * 0.7) / 2
  );
  const [delay, setDelay] = useState(4000);
  const slickTrack = useRef(null);

  const onMouseDown = useCallback(() => {
    setDelay(null);
  }, []);

  const onMouseUp = useCallback(() => {
    setDelay(4000);
  }, []);

  const onLeftClick = useCallback(() => {
    if (slickTrack.current) {
      slickTrack.current.style.transform = `translateX(${
        -1 * initMove - window.innerWidth * 0.7 * (sliderNumber - 2)
      }px)`;
      slickTrack.current.style.transition = "transform 0.5s ease-in-out";

      if (sliderNumber === 1) {
        setTimeout(() => {
          slickTrack.current.style.transition = "none";
          slickTrack.current.style.transform = `translateX(${
            -1 * initMove - window.innerWidth * 0.7 * (imgSliders.length - 1)
          }px)`;
          setSliderNumber(imgSliders.length);
        }, 400);
        return;
      }
      setSliderNumber((prev) => prev - 1);
    }
  }, [sliderNumber, initMove]);

  const onRightClick = useCallback(() => {
    if (slickTrack.current) {
      slickTrack.current.style.transform = `translateX(${
        -1 * initMove - window.innerWidth * 0.7 * sliderNumber
      }px)`;
      slickTrack.current.style.transition = "transform 0.5s ease-in-out";

      if (sliderNumber === imgSliders.length) {
        setTimeout(() => {
          slickTrack.current.style.transition = "none";
          slickTrack.current.style.transform = `translateX(${-1 * initMove}px)`;

          setSliderNumber(1);
          return;
        }, 400);
      }

      setSliderNumber((prev) => prev + 1);
    }
  }, [sliderNumber, initMove]);

  useEffect(() => {
    if (slickTrack.current) {
      slickTrack.current.style.transition = "none";
      slickTrack.current.style.transform = `translateX(${
        -initMove - window.innerWidth * 0.7 * (sliderNumber - 1)
      }px)`;
    }
  }, [initMove]);

  useInterval(onRightClick, delay);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setInitMove(
        window.innerWidth * 0.7 -
          (window.innerWidth - window.innerWidth * 0.7) / 2
      )
    );
    return () =>
      window.removeEventListener("resize", () =>
        setInitMove(
          window.innerWidth * 0.7 -
            (window.innerWidth - window.innerWidth * 0.7) / 2
        )
      );
  }, []);

  return (
    <Container>
      <SlickSlider>
        <SlickList>
          <div className="slickTrack" ref={slickTrack}>
            {imgSliders && (
              <>
                <BannerElement
                  imgSrc={imgSliders[imgSliders.length - 1].src}
                  title={imgSliders[imgSliders.length - 1].alt}
                  subTitle={imgSliders[imgSliders.length - 1].content}
                ></BannerElement>

                {imgSliders.map((item, index) => (
                  <BannerElement
                    key={index}
                    id={index}
                    imgSrc={item.src}
                    title={item.alt}
                    subTitle={item.content}
                    sliderNumber={sliderNumber}
                  ></BannerElement>
                ))}
                <BannerElement
                  imgSrc={imgSliders[0].src}
                  title={imgSliders[0].alt}
                  subTitle={imgSliders[0].content}
                ></BannerElement>
              </>
            )}
          </div>
        </SlickList>
      </SlickSlider>
      <button
        className="left"
        onClick={onLeftClick}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
      </button>
      <button
        className="right"
        onClick={onRightClick}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
      </button>
    </Container>
  );
};

export default TopBanner;
