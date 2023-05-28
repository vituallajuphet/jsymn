import React, { useEffect, useMemo, useState } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { getBanner } from "../../dbconfig/query";
import { getImage } from "../../utils";
import { navLinks } from "../../data";

const Header = () => {
  return (
    <StyledHeader className="header">
      <div className="wrapper">
        <div className="header_cont">
          <div className="logo_cont">
            <div className="logo_inner">
              <NavLink to="/">
                <img src={logo} alt="Jsync logo" />
              </NavLink>
              <span>J SYNC</span>
            </div>
            <div className="contact_header_info">
              {/* <div className="contact_number">
                <span className="phone_number">
                  <i className="fas fa-phone"></i> 09051123121
                </span>
              </div> */}
              <div className="social_icons">
                <span>
                  <a target="_blank" rel="noreferrer"  href="https://www.facebook.com/profile.php?id=100087108311774&mibextid=ZbWKwL">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a target="_blank" rel="noreferrer"  href="https://www.instagram.com">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a target="_blank" rel="noreferrer"  href="https://www.twitter.com">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* <div>
            {data.map((r: any) => {
              const imgRef = r.mainImage.asset._ref;

              return (
                <div>
                  <div>{r?.title}</div>
                  <img src={getImage(imgRef)} alt='tawa' />
                </div>
              );
            })}
          </div> */}
          <div className="nav_cont">
            <nav>
              <ul>
                {navLinks.map((nav) => {
                  return (
                    <li>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isActive ? "text-[#0ab2cc]" : "text-white font-thin"
                        }
                        key={nav.id}
                        to={nav.path}
                      >
                        {nav.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  .contact_cont {
    background-color: #fff;
    padding: 8px 0;
    .contact_number {
      color: green;
    }
    .cont_info_top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .phone_number {
        font-size: 1rem;
        font-weight: bold;
      }
      .social_icons {
        a {
          font-size: 20px;
          margin-right: 10px;
          color: #3c5fdf;
          :nth-child(2) {
            color: red;
          }
          :nth-child(3) {
            color: #67cff1;
          }
        }
      }
    }
  }

  &.header {
    background-color: #185d75;
  }
  .header_cont {
    display: flex;
    justify-content: space-between;
    padding: 7px 0;
    align-items: center;

    .logo_inner {
      display: flex;
      align-items: center;
    }

    .contact_header_info {
      display: flex;
      align-items: center;
      margin-left: 6rem;
      .contact_number {
        i {
          color: #63e9f3;
          margin-right: 10px;
        }
        .phone_number {
          color: #fff;
          font-size: 1.1rem;
        }
      }
      .social_icons {
        margin-left: 1rem;
        span {
          display: flex;
          gap: 1rem;
          a {
            color: #fff;
            font-size: 1.4rem;
          }
        }
      }
    }
  }
  .wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .nav_cont {
    ul {
      display: flex;
      li {
        margin-left: 1rem;
        list-style-type: none;
        a {
          text-decoration: none;
          font-size: 16px;
          transition: all ease-in 300ms;
          &:hover {
            opacity: 0.5;
          }
        }
      }
    }
  }
  .logo_cont {
    display: flex;
    align-items: center;
    padding: 9px 0;

    span {
      font-size: 1.1rem;
      color: #fff;
      margin-left: 10px;
      font-weight: bold;
    }
    img {
      width: 50px;
    }
  }
`;

export default Header;
