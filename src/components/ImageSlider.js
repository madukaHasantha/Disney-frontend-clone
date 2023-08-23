import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';
 



function ImageSlider() {

    let settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

  return (
     
    <Carousel {...settings}>
        <Wrap>
            <img src = '/images/slider-badging.jpg' alt ="slider"/>
        </Wrap>
        <Wrap>
            <img src = '/images/slider-badag.jpg' alt ="slider"/>
        </Wrap>
    </Carousel>
  )
}

export default ImageSlider

const Carousel = styled(Slider)`

    
    margin-top: 20px;

    .slick-list{
        overflow: visible;
        
    }

    button{ // carousel eke depeththe thiyena next button
        z-index: 1;
    }

    ul li button{ // carousel eketa yatin thiyena dots
        
        &:before{
            font-size: 10px
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before{
        color:white
    }


       
`
const Wrap = styled.div`
    cursor: pointer;

    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
            rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`;
