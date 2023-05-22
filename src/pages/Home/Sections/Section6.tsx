import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import post1 from "../../../assets/images/posts/post1.jpg";
import post2 from "../../../assets/images/posts/post2.jpg";
import post3 from "../../../assets/images/posts/post3.jpg";
import logo from "../../../assets/images/logo-small.png";

const items = [
  {
    id: "1",
    title: "Heading 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id, sunt autem voluptatem nesciunt et inventore doloribus consequuntur ratione",
    images: post1,
  },
  {
    id: "2",
    title: "Heading 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id, sunt autem voluptatem nesciunt et inventore doloribus consequuntur ratione",
    images: post2,
  },
  {
    id: "3",
    title: "Heading 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id, sunt autem voluptatem nesciunt et inventore doloribus consequuntur ratione",
    images: post3,
  },
  {
    id: "4",
    title: "Heading 4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id, sunt autem voluptatem nesciunt et inventore doloribus consequuntur ratione",
    images: post1,
  },
  {
    id: "5",
    title: "Heading 5",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id, sunt autem voluptatem nesciunt et inventore doloribus consequuntur ratione",
    images: post2,
  },
  {
    id: "6",
    title: "Heading 6",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id, sunt autem voluptatem nesciunt et inventore doloribus consequuntur ratione",
    images: post3,
  },
];

interface StyledProps {
  image: any;
}

function Section6() {
  return (
    <StyledCont className="section Section6">
      <div className="wrapper">
        <div className="sec6_cont">
          <h2>See our Latest Posts</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, id, sunt autem voluptatem nesciunt et inventore
            doloribus consequuntur ratione
          </p>
          <div className="posts_cont">
            {items.map((item) => {
              const { id, title, content, images } = item;
              return (
                <div
                  key={id}
                  data-aos="fade-left"
                  className="post_item max-w-[360px] bg-white "
                >
                  <div className="post_content">
                    <figure className="relative ">
                      <img
                        alt="images"
                        src={images}
                        className="block w-full  h-[200px] object-cover"
                      />
                      <div className=" absolute right-0 bottom-0 triangle">
                        <img
                          src={logo}
                          className="w-[45px] h-[45px] max-w-[unset] absolute right-3 bottom-[-5.5rem]"
                          alt="logo"
                        />
                      </div>
                    </figure>
                    <div className="p-4 ">
                      <div className="flex-row flex items-center mb-4">
                        <div className="mr-2">
                          <img
                            src={logo}
                            className="w-[35px] h-[35px]"
                            alt="logo"
                          />
                        </div>
                        <div>
                          <h4 className="text-[12px]">Jsync Author</h4>
                          <div className="text-[11px] text-gray-400">
                            March 15, 2023
                          </div>
                        </div>
                      </div>

                      <h3 className="text-[20px] mb-2">{title}</h3>
                      <p className="mb-4 text-gray-600 font-thin">{content}</p>
                      <a
                        href=""
                        className="min-w-[7rem] inline-block border text-gray-700 border-gray-200 text-sm text-center p-2  rounded-full mt-4 transition-opacity duration-1000 ease-out opacity-100 hover:opacity-40"
                      >
                        Read More
                      </a>
                      <div className="w-full h-[1px] bg-gray-200 my-4"></div>

                      <div className="flex-row flex">
                        <a className="flex-row flex items-center " href="#">
                          <i className="fas fa-comment text-sm text-gray-600"></i>
                          <span className="font-bold text-[12px] text-gray-600 ml-1">
                            No Comments
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StyledCont>
  );
}

const StyledCont = styled.div`
  background: #219bc5;
  padding: 4rem 0;
  min-height: 400px;

  .triangle {
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 100px 124px;
    border-color: transparent transparent rgba(44, 45, 45, 0.6) transparent;
  }
  h2 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .posts_cont {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 4rem;
    flex-wrap: wrap;
  }
`;

const PostItem = styled.div<StyledProps>`
  &.post_item {
    cursor: pointer;
    width: 30%;
    background: url(${(par) => par.image}) no-repeat center center;
    min-height: 300px;
    background-color: gray;
    transition: all ease-in-out 300ms;
    position: relative;
    padding: 1rem;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      overflow: hidden;
      inset: 0;
    }
    &:hover {
      opacity: 0.6;
    }
    .post_content {
      position: absolute;
      z-index: 1;
      bottom: 1.5rem;
      h3 {
        color: #fff;
        margin-bottom: 1rem;
      }
      p {
        color: #fff;
        font-size: 13px;
      }
    }
  }
`;

export default Section6;
