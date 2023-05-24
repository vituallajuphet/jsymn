import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import dwight from "../../../assets/images/staffs/dwight.jpg";
import jheric from "../../../assets/images/staffs/ikoy.jpg";
import syriel from "../../../assets/images/staffs/syriel.jpg";
import { useRecoilValue } from "recoil";
import { authorData } from "../../../Atoms/selectors";
import { getImage } from "../../../utils";
import { PortableText } from "@portabletext/react";

function Section5() {
  const data = useRecoilValue(authorData);
  return (
    <StyledCont className="section Section5">
      <div className="wrapper">
        <div className="sec5_cont">
          <h2>Meet our Staffs</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit explicabo laboriosam dolorem quia rem reiciendis
            perferendis minus.
          </p>
          <div className="staffLists">
            <Carousel emulateTouch showIndicators={false} showStatus={false}>
              {data?.map((d: any) => {
                return (
                  <div className="slide_item">
                    <div className="slideImgContainer">
                      <img src={getImage(d.image.asset._ref)} alt={d.name} />
                    </div>
                    <p className="legend">
                      <span className="author">{d.name}</span>
                      <span className="block text-sm text-[#c1faff]">
                        {d.position}
                      </span>
                      <div className="author_description font-thin">
                        <PortableText value={d.bio} />
                      </div>
                    </p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </StyledCont>
  );
}

const StyledCont = styled.div`
  .sec5_cont {
    padding: 4rem 0;
    text-align: center;
    h2 {
      color: #219bc5;
      font-size: 30px;
      margin-bottom: 1.5rem;
    }
  }
  .staffLists {
    margin-top: 2.6rem;
    .slick-list {
      background-color: red;
      .slick-slide {
        color: black;
      }
    }
    li.slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .slide_item {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 400px;
      padding: 2rem 1rem;
      border-radius: 19px;
      background: #219bc5;
      .legend {
        position: static;
        width: 100%;
        margin-left: 0;
        border-radius: 0;
        background: none;
        color: #222;
        opacity: 1;
        font-size: 16px;
        .author {
          font-weight: bold;
          font-size: 19px;
          color: #fff;
        }
        .author_description {
          display: block;
          font-size: 15px;
          margin: 1rem 0 0;
          padding: 0 2rem;
          color: #fff;
        }
      }
    }
    .slideImgContainer {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      overflow: hidden;
      border: 6px solid #dbdbdb;
      img {
      }
    }

    .carousel .control-prev.control-arrow {
      left: 26%;
    }
    .carousel .control-next.control-arrow {
      right: 26%;
    }

    .carousel .control-prev.control-arrow::before {
      border-right: 8px solid #171616;
    }
    .carousel .control-next.control-arrow::before {
      border-left: 8px solid #171616;
    }

    .carousel.carousel-slider .control-arrow:hover {
      background: none;
    }
  }
`;

export default Section5;
