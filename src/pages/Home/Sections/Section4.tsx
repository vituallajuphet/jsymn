import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import board from "../../../assets/images/board.jpg";

function Section4() {
  return (
    <StyledCont className="section section4">
      <div className="wrapper">
        <div className="sec4_cont">
          <div className="sec4_left">
            <h1>
              Welcome to <span>J-SYNC</span>
            </h1>
            <div className="main_content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae maxime dolor quam fugiat similique unde numquam,
                doloribus provident! Delectus reiciendis quam nesciunt sed nihil
                tempore voluptatibus reprehenderit tenetur. Veniam, doloremque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                aperiam quisquam cumque maiores! Harum sint optio veniam
                laudantium, laborum aspernatur quidem. Sunt distinctio
                necessitatibus ipsum voluptas molestiae tempora ullam sint?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                error enim unde hic aut dignissimos minus aperiam aliquid
                laboriosam doloremque, facere, asperiores eveniet sequi? Impedit
                ad natus molestias dignissimos aspernatur.
              </p>
            </div>
          </div>
          <div className="sec4_right">
            <figure>
              <img src={board} />
            </figure>
          </div>
        </div>
      </div>
    </StyledCont>
  );
}

const StyledCont = styled.div`
  background-color: #d5d5d5;
  .sec4_cont {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 4rem 0;
    h1 {
      span {
        display: block;
        font-size: 3rem;
        color: #859f5b;
        margin-top: 0.6rem;
      }
    }
    .main_content {
      margin-top: 2rem;
      p {
        line-height: 27px;
        margin-bottom: 1rem;
      }
    }
  }
  .sec4_right {
    flex-shrink: 0;
    margin-left: 1rem;
    figure {
      max-width: 400px;
    }
  }
`;

export default Section4;
