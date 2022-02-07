import { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import { images } from './images';
import Img from './img';
import './style.scss';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 767 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 767, min: 460 },
        items: 4
    },
    minmobile: {
        breakpoint: { max: 460, min: 0 },
        items: 3
    }
};

export default function () {
    return (<div className='instagram'>
        <div className="container">
            <div className="top">
                <div className="topline">@ElasticThemes</div>
                <div className="title">We're on Instagram!</div>
            </div>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                customTransition="all 1s"
                removeArrowOnDeviceType={["tablet", "mobile", 'desktop', "minmobile"]}
                deviceType={navigator.userAgent}
                itemClass="flex-center"
            >
                {images.map(data => <Img>{data}</Img>)}
            </Carousel>
        </div>

    </div>);
}
