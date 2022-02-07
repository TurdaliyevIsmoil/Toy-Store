import { useState, useRef } from 'react';
import './style.scss';
import teddy from '../../images/taddy.png';
import shape from '../../images/shape.png';

export default function (props) {
    return (<div className='recomended-products'>
        <div className="container">
            <div className="column flex-center">
                <img src={teddy} alt="" />
                <div className="content">
                    <h1>Stuffed Animals</h1>
                    <a href="" className='call-to-action'>Shop Now</a>
                </div>
            </div>
            <div className="column flex-center">
                <img src={shape} alt="" />
                <div className="content">
                    <h1>Wooden Toys</h1>
                    <a href="" className='call-to-action'>Shop Now</a>
                </div>
            </div>
        </div>
    </div>);
}
