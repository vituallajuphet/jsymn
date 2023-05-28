import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import secImg from "../../../assets/images/sec1img.jpg";

import { getImage } from "../../../utils/";
import { useRecoilValue } from "recoil";
import { servicesList } from "../../../Atoms/selectors";
import ScrollAnimation from "react-animate-on-scroll";

const Section1 = () => {
  const data = useRecoilValue(servicesList);

  return (
    <StyledCont className="section section1 !md:pb-4 !pb-8 ">
      <div className="wrapper">
        <div className="sect_cont xl:px-0 px-4 md:flex-row flex-col">
          <div className="sect1_cont md:min-w-[236px] min-w-[100%]">
            <div className="sec1_inner">
              <h2 className="font-heading text-[1.5rem]">Our Services</h2>
              <p>
                Explore our comprehensive range of services, tailored to meet your needs.
              </p>
              <Link to="/services">Explore All Services</Link>
            </div>
          </div>
          <div className="services_lists md:gap-4 -200 gap-0flex-wrap md:flex-nowrap md:ml-[4rem] justify-center ml-0 md:mt-0 mt-10 flex-wrap">
            {data.length ? (
              <>
                {data.map((d: any, i: number) => {
                  return (
                    <ScrollAnimation
                      className="service_item md:mb-4 mb-3 w-full md:max-w-[30%] max-w-[100%]  border-gray-400 border md:p-0 p-4 rounded-lg md:border-none"
                      animateIn="animate__fadeInLeft"
                      animateOnce
                      delay={(i + 1) * 250}
                    >
                      <img
                        src={getImage(d.iconImage.asset._ref)}
                        alt={d.heading}
                      />
                      <h3>{d.heading}</h3>
                      <p>{d.content}</p>
                      <Link to={d.link}>Read More</Link>
                    </ScrollAnimation>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </StyledCont>
  );
};

const StyledCont = styled.div`
  padding: 4rem 0;
  .sect_cont {
    display: flex;
    .sect1_cont {
      background: url(${secImg}) no-repeat;
      background-size: contain;
      text-align: center;
      padding: 1rem;
      color: #fff;
      max-width: 236px;
      height: 353px;
      position: relative;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      display: flex;

      .sec1_inner {
        z-index: 1;
        position: relative;

        h2 {
          color: #859f5b;
          margin: 0 0 14px;
        }
        a {
          max-width: 182px;
          display: inline-block;
          margin: 0 auto;
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

      p {
        line-height: 27px;
      }
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        left: 0;
        top: 0;
      }
    }
    .services_lists {
      display: flex;
      flex-wrap: wrap;
      .service_item {
        h3 {
          margin: 0 0 15px;
        }
        img {
          width: 47px;
        }
        a {
          margin-top: 10px;
          display: block;
          font-weight: bold;
          color: #859f5b;
          text-decoration: none;
          transition: all ease-in-out 300ms;
          &:hover {
            opacity: 0.6;
          }
        }
      }
    }
  }
`;

export default Section1;
