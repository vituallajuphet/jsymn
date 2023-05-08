import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getSection2Heading } from "../../../dbconfig/query";
import Loading from "../../../components/Loading/Loading";
import { useRecoilValue } from "recoil";
import { section2data } from "../../../Atoms/selectors";

const Section2 = () => {
  const data: any = useRecoilValue(section2data);

  const { heading, list } = data;

  console.log("heading", heading);

  return (
    <StyledCont className="section section2">
      <Loading />
      <div className="wrapper">
        <div className="sec2_upper">
          <h2>{heading.heading}</h2>
          {/* <h2>Have Computer Problems? <span>Get Help Right Now</span></h2> */}
        </div>
        <div className="sec2_cont">
          {list.map((l: any) => {
            return (
              <div key={l._id} className="sec2_item">
                <span>
                  <i className={`fas fa-${l.icon}`}></i>
                </span>
                <h3>{l.heading}</h3>
                <p>{l.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </StyledCont>
  );
};

const StyledCont = styled.div`
  background-color: #edebeb;
  padding: 4rem 0;
  color: #222;
  .sec2_upper {
    margin: 0 0 3rem;
    display: flex;
    justify-content: center;
    h2 {
      color: #219bc5;
      font-size: 30px;
    }
  }
  .sec2_cont {
    gap: 3rem;
    display: flex;
    justify-content: center;
    .sec2_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      max-width: 30%;
      h3 {
        margin: 1rem 0;
      }
      p {
        line-height: 25px;
      }
      span {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #859f5b;
        display: block;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          color: #fff;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default Section2;
