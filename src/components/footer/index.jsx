import { useState, useRef } from 'react';
import './style.scss';
import logo from '../../images/logowhite.png'
import SocialMedia from '../socialMedia';

export default function (props) {
    return (<div className='footer'>
        <div className="container">
            <div className="menu flex-center">
                <div className="logo flex-center"><img src={logo} alt="" /></div>
                <menu className='links flex-center'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Catalog</a>
                    </li>
                    <li>
                        <a href="#">Delivery</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contacts</a>
                    </li>
                </menu>
                <SocialMedia />
            </div>
            <hr />
            <div className="bottom">
                <span>Developer with <a href="https://t.me/ismoilturdaliyev">Ismoil Turdaliyev</a></span>
                <span>Figma version: <a href="https://www.figma.com/file/yxFBUGXLGBgE7VDVsvBmfl/ToyStore-(Copy)?node-id=1%3A2">Toy Store</a></span>
            </div>
        </div>
    </div>);
}
