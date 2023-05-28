import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { getImage } from "../../utils/";
import { PortableText } from "@portabletext/react";
import { useRecoilValue } from "recoil";
import { bannerData } from "../../Atoms/selectors";

const Banner = () => {
  const data = useRecoilValue(bannerData);

  return (
    <StyledBanner>
      <div className="bnr_cont overflow-hidden relative">
        <div className="">
          <div className="w-[100%]">
            {data?.length ? (
              <Slide>
                {data.map((dta: any, index: number) => (
                  <div
                    key={index}
                    className="relative"
                    data-aos="slide-left"
                    data-delay={(!index ? 1 : index) * 1000}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${getImage(
                          dta.mainImage.asset._ref
                        )})`,
                      }}
                      className="h-[500px] bg-no-repeat bg-center"
                    ></div>
                    <div className=" w-full bottom-0 left-0 min-h-[200px] py-4 z-20 absolute bg-[#302e2e6c]">
                      <div className="wrapper">
                        <h2 className="font-heading text-[2rem] text-white">
                          {dta.heading}
                        </h2>

                        <div className="text-white mt-4">
                          <PortableText value={dta.body} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slide>
            ) : null}
          </div>
        </div>
      </div>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  height: auto;
  overflow-y: hidden;
  position: relative;

  .bnr_cont {
    .react-slideshow-container .default-nav {
      background: rgba(255, 255, 255, 0.69);
      border-radius: 0;
      width: 50px;
      height: 50px;
      &:hover {
        opacity: 0.5;
      }
    }
  }

  .bnr_info {
    position: absolute;
    width: 100%;
    left: 0;
    max-width: 373px;
    min-height: 285px;
    z-index: 2;
    padding: 1rem;
    top: 2rem;
    h2 {
      color: #00beff;
      font-size: 38px;
      word-spacing: 1px;
      line-height: 3.5rem;
      span {
        font-family: "Roboto", sans-serif;
        display: block;
        font-weight: 300;
        color: #fff;
        font-size: 34px;
      }
    }
    p {
      color: #fff;
      line-height: 30px;
      margin: 1rem 0 0;
    }

    a {
      max-width: 142px;
      display: block;
      background: #859f5b;
      text-align: center;
      color: #fff;
      text-decoration: none;
      padding: 0.7rem 1rem;
      transition: all ease-in 300ms;
      margin: 30px 0 0;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  .bnr_cont {
    position: relative;

    .wrapper {
      width: 100%;
    }

    /* &:before{
        position:absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, .5);
        z-index: 1;
      } */
  }
`;

export default Banner;
