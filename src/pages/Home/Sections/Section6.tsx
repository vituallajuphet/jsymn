import React from 'react'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import post1 from '../../../assets/images/posts/post1.jpg'
import post2 from '../../../assets/images/posts/post2.jpg'
import post3 from '../../../assets/images/posts/post3.jpg'

const items = [
    {
        id: '1',
        title: 'Heading 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id, sunt autem voluptatem nesciunt et inventore doloribus consequuntur ratione',
        images: post1
    },
    {
        id: '2',
        title: 'Heading 2',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id, sunt autem voluptatem nesciunt et inventore doloribus consequuntur ratione',
        images: post2
    },
    {
        id: '3',
        title: 'Heading 3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id, sunt autem voluptatem nesciunt et inventore doloribus consequuntur ratione',
        images: post3
    },
    {
        id: '4',
        title: 'Heading 4',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id, sunt autem voluptatem nesciunt et inventore doloribus consequuntur ratione',
        images: post1
    },
    {
        id: '5',
        title: 'Heading 5',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id, sunt autem voluptatem nesciunt et inventore doloribus consequuntur ratione',
        images: post2
    },
    {
        id: '6',
        title: 'Heading 6',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id, sunt autem voluptatem nesciunt et inventore doloribus consequuntur ratione',
        images: post3
    }
]

interface StyledProps{
    image: any
}

function Section6() {

  return (
    <StyledCont className='section Section6'>
        <div className="wrapper">
            <div className="sec6_cont">
                <h2>See our Latest Posts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id, sunt autem voluptatem nesciunt et inventore doloribus consequuntur ratione</p>
                <div className="posts_cont">
                    {
                        items.map(item => {
                            const {id, title, content, images} = item
                            return (
                                <PostItem key={id} className='post_item' image={images}>
                                    <div className='post_content'>
                                        <h3>{title}</h3>
                                        <p>{content}</p>
                                    </div>
                                </PostItem>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </StyledCont>
  )
}

const StyledCont = styled.div`
    background: #bdfbd2;
    padding: 4rem 0;
    min-height: 400px;
    h2{
        color: #423d3d;
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    p{
        color: #7e7e7e;
    }
    .posts_cont{
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-top: 4rem;
        flex-wrap: wrap;        
    }
`

const PostItem = styled.div<StyledProps>`
    &.post_item{
        cursor: pointer;
        width: 30%;
        background: url(${(par => par.image) }) no-repeat center center;
        min-height: 300px;
        background-color: gray;
        transition: all ease-in-out 300ms;
        position: relative;
        padding: 1rem;
        &:before{
            content:"";
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0, .5);
            overflow: hidden;
            inset:0;
        }
        &:hover{
            opacity: .6;
        }
        .post_content{
            position: absolute;
            z-index: 1;
            bottom:1.5rem;
            h3{
                color: #fff;
                margin-bottom: 1rem;
            }
            p{
                color: #fff;
                font-size: 13px;
            }
        }        
    }
`

export default Section6