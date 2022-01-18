import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "./styles";

const BannerElement = ({ id, imgSrc, title, subTitle, sliderNumber }) => {
  return (
    <Container current={id + 1 === sliderNumber}>
      <div className="content">
        <div className="content__imgWrapper">
          <a href="">
            <img src={imgSrc} />
          </a>
        </div>
        {id + 1 === sliderNumber && (
          <div className="content__infoWrapper">
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
            <hr></hr>
            <a href="">
              바로가기
              <span>
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              </span>
            </a>
          </div>
        )}
      </div>
    </Container>
  );
};

export default BannerElement;
