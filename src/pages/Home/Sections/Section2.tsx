import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



function Section2() {
  return (
    <StyledCont className='section section2'>
        <div className="wrapper">
            <div className='sec2_upper'>
                <h2>Have Computer Problems? <span>Get Help Right Now</span></h2>
            </div>
            <div className="sec2_cont">
                <div className='sec2_item'>
                    <span>
                        <i className='fas fa-dollar'></i>
                    </span>
                    <h3>Low Prices</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo quos voluptatibus, sunt suscipit sequi, exercitationem delectus repellat porro sed blanditiis minima recusandae similiqu.</p>
                </div>
                <div className='sec2_item'>
                    <span>
                        <i className='fas fa-clock'></i>
                    </span>
                    <h3>12 / 7 Supports</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo quos voluptatibus, sunt suscipit sequi, exercitationem delectus repellat porro sed blanditiis minima recusandae similiqu.</p>
                </div>
                <div className='sec2_item'>
                    <span>
                        <i className='fas fa-network-wired'></i>
                    </span>
                    <h3>Qualified Staffs</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo quos voluptatibus, sunt suscipit sequi, exercitationem delectus repellat porro sed blanditiis minima recusandae similiqu.</p>
                </div>
            </div>
        </div>
    </StyledCont>
  )
}

const StyledCont = styled.div`
    
    background-color: #edebeb;
    padding: 4rem 0;
    color: #222;
    .sec2_upper{
        margin: 0 0 3rem;
        display: flex;
        justify-content: center;
        h2{
            color: #219bc5;
            font-size: 30px;
        }
    }
    .sec2_cont{
        gap: 3rem;
        display: flex;
        justify-content:center;
        .sec2_item{
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;
            text-align: center;
            max-width: 30%;
            h3{
                margin: 1rem 0
            }
            p{
                line-height: 25px;
            }
            span{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: #859f5b;
                display: block;
                display: flex;
                align-items: center;
                justify-content: center;
                i{
                    color: #fff;
                    font-size: 1.2rem;
                }
            }
        }
    }
`


export default Section2