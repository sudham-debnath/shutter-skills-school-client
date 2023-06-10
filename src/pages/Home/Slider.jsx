/* eslint-disable no-unused-vars */
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <Carousel className=''>
                <div>
                    <img src="https://i.ibb.co/tLmjnZg/4357378.webp" />
                </div>
                <div>
                    <img src="https://i.ibb.co/P5JcZdN/4367375.webp" />
                </div>
                <div>
                    <img src="https://i.ibb.co/DwLd1HN/4357700.webp" />
                </div>
            </Carousel>
    );
};

export default Slider;