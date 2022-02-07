import { useState, useRef } from 'react';
import './style.scss';
import img from '../../images/telegramnews.png'

export default function (props) {
    return (<div className='newsletter'>
        <div className="container flex-center">
            <div className='content flex-center'>
                <img src={img} alt="" />
                <h1 className="title">Subscribe to our newsletter <br />
                    & get <span>10% discount!</span>
                </h1>
            </div>
            <form className="form flex-center">
                <input type="email" placeholder='Email Address' />
                <button type='button' className='call-to-action'>SEND</button>
            </form>
        </div>
    </div>);
}
