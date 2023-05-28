import React, { useEffect, useMemo, useState } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../../data";

const Header = () => {

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);


  useEffect(() => {
    const callback = (e?: any)=> {
      const winWidth = e?.target.innerWidth || window.innerWidth
      const height = e?.target.innerHeight || window.innerHeight
      setWidth(winWidth)
      setHeight(height)
    }

    window.addEventListener('resize',callback )

    callback()
    return ()=> {
      window.removeEventListener('resize',callback )
    }
  }, [])



  if(width <= 600) {
    return (
      <>
      <div className="flex flex-row justify-between items-center bg-[#185d75] p-3 py-4 relative z-[50]">
        <div className="">
        <NavLink to="/" className='flex-row flex items-center justify-center'>
          <img src={logo} alt="Jsync logo" className="block w-[50px] h-[50px]"/>
          <span className="text-white ml-2 text-xl">JSYNC</span>
        </NavLink>
        </div>
        <div>
          <button type="button" className="text-white text-xl"
            onClick={() => {
              setOpen(prev => !prev)
            }}
          >
            <span><i className={ open ? 'fas fa-times' : 'fas fa-bars'}></i></span>
          </button>
        </div>
        
      </div>
      {
        open ? (
          <div style={{height: height}} className={`fixed left-0 w-full bg-[#222] z-[30] top-[82px] `}>
        <nav>
              <ul className="p-4">
                {navLinks.map((nav) => {
                  return (
                    <li>
                      <NavLink
                        className={({ isActive, isPending }) =>
                        `${isActive  ? "text-[#0ab2cc]" : "text-[#185d75] font-thin text-white "}  w-full text-center p-2 w-full block mb-2 text-xl`
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
        ) : null

      }
      </>
    )
  }

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


  @media only screen and (max-width: 1200px) {
    .header_cont{
      padding: 7px 15px
    }
  }

  @media only screen and (max-width: 1010px) {
    .header_cont{
      flex-direction: column;
      align-items: 'center';
      justify-content: 'center'
    }
    .logo_cont{
      flex-direction: column;
      align-items: 'center';
      justify-content: 'center'
    }
    .header_cont .contact_header_info{
      margin-left: 0;
      margin-top: 20px
    }
  }
`;

export default Header;
