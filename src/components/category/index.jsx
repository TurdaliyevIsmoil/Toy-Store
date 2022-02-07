import { useState, useRef } from 'react';
import './style.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from '../product';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 767 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 767, min: 460 },
        items: 2
    },
    minmobile: {
        breakpoint: { max: 460, min: 0 },
        items: 1
    }
};

export default function ({ data }) {
    return (<div className='container category'>
        <div className="title flex-center">
            <h1 className='title'>{data.title}</h1>
            <a href='#' className="show flex-center">
                See All Toys <img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-right.png" />
            </a>
        </div>
        <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={true}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customTransition="all 1s"
            removeArrowOnDeviceType={["tablet", "mobile", 'desktop', "minmobile"]}
            deviceType={navigator.userAgent}
            dotListClass="dot-list-style"
            itemClass="product flex-center"
        >
            {data.products.map((data) => (
                <Product data={data} />
            ))}
        </Carousel>
    </div>);
}
