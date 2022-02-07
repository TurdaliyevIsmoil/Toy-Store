import { useState, useRef } from 'react';
import './style.scss';

export default function (props) {
    return (<div className='hero flex-center'>
        <div className="content flex-center">
            <div className="topline">Say Hello to ToyStore!</div>
            <div className="title">Free Ecommerce Template for Webflow</div>
            <a href="#" className='call-to-action big'>Open Catalog</a>
        </div>
    </div>);
}
