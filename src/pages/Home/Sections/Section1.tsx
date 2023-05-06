import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import secImg from "../../../assets/images/sec1img.jpg";

import {getImage} from '../../../utils/'
import { getServices } from "../../../dbconfig/query";



const Section1 = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getServices().then((res) => {
      setData(res);
    });
  }, []);


  return (
    <StyledCont className='section section1'>
      <div className='wrapper'>
        <div className='sect_cont'>
          <div className='sect1_cont'>
            <div className='sec1_inner'>
              <h2 className="font-heading text-[1.5rem]">Our Services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolores omnis repellendus porro unde blanditiis obcaecati sint?
              </p>
              <Link to='/services'>Explore All Services</Link>
            </div>
          </div>
          <div className='services_lists'>
            {
              data.length ? (
                  <>
                    {data.map((d: any, i: number) => {
                      return (
                          <div className='service_item' key={d._id}>
                              <img src={getImage(d.iconImage.asset._ref)} alt={d.heading} />
                              <h3>{d.heading}</h3>
                              <p>{d.content}
                              </p>
                              <Link to={d.link}>Read More</Link>
                          </div>
                      )
                    })}
                  </>
              ) : null

            }
            
           
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
      max-width: 300px;
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
      margin-left: 4rem;
      display: flex;
      flex-wrap: wrap;
      .service_item {
        max-width: 30%;
        margin-bottom: 2rem;
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
