import React from 'react'
import bnrImage  from '../../assets/images/banner.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <StyledBanner>
        <div className="bnr_cont">
          <div className="wrapper">
              <div className='bnr_info'>
                  <h2>Your PC / Laptop Wants To Live More. <span>Bring it to Us.</span></h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In consectetur ipsam repudiandae sunt quia dolorem asperiores! Quia laudantium harum ut.!</p>
                  <Link to='/about-us'>Learn More</Link>
              </div>
              <figure className='bnr_images'>
                <img src={bnrImage} alt="banner" />
              </figure>
          </div>
        </div>
    </StyledBanner>
  )
}

const StyledBanner = styled.div`
    height: 500px;
    overflow-y: hidden;
    position:relative;
    
    .bnr_info{
      position: absolute;
      width: 100%;
      left:0;
      max-width: 373px;
      min-height: 285px;
      z-index:2;
      padding: 1rem;
      top: 5rem;
      h2{
        color: #00beff;
        font-size: 45px;
        word-spacing: 1px;
        line-height: 3.5rem;
        span{
          font-family: 'Roboto', sans-serif;
          display: block;
          font-weight:300;
          color:#fff;
          font-size: 34px;
        }
      }
      p{
        color:#fff;
        line-height: 30px;
        margin: 1rem 0 0;
      }

      a{
        max-width: 142px;
        display: block;
        background: #859f5b;
        text-align: center;
        color: #fff;
        text-decoration: none;
        padding: 0.7rem 1rem;
        transition: all ease-in 300ms;
        margin: 30px 0 0;

        &:hover{
          opacity: .6
        }
      }
    }

    .bnr_cont{
      position: relative;

      .wrapper {
        width:100%;
      }
      
      &:before{
        position:absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, .5);
        z-index: 1;
      }
    }
`

export default Banner