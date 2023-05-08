import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Section3() {
  return (
    <StyledCont className="section section3">
      <div className="wrapper">
        <div className="sec3_cont">
          <div className="sec3_left">
            <h2>Innovation happens best when we're all in!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              modi iusto debitis natus culpa quisquam laboriosam doloribus, eos
              ab asperiores maiores molestias similique? Sequi quam aut iste
              accusamus, expedita quia.
            </p>
            <Link to="/about-us">View More</Link>
          </div>
          <div className="sec3_right"></div>
        </div>
      </div>
    </StyledCont>
  );
}

const StyledCont = styled.div``;

export default Section3;
