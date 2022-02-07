import { useState, useRef } from 'react';
import './style.scss';

import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import SocialMedia from '../socialMedia';

export default function () {
    const [mobile, setmobile] = useState(false);
    const openMenu = () => setmobile(!mobile);
    return (<nav className='nav'>
        <div className='top flex-center'>
            <div className="container flex-center">
                <div className='contacts flex-center'>
                    <div className="call">
                        Call Us: <a href="tel:+998993667639">+998 99 366 76 39</a>
                    </div>
                    <div className="email">
                        Email: <a href="mailto:ismoiljonturdaliyevv@gmail.com">admin@toystore.com</a>
                    </div>
                </div>
                <SocialMedia />
            </div>
        </div>
        <div className='container flex-center navbar'>
            <div className="left flex-center">
                <div className="logo flex-center"><img src={logo} alt="" /></div>
                <menu className={`menu flex-center  ${mobile ? 'open-mobile' : ''}`}>
                    <li><a href="#" onClick={openMenu}>Catalog</a></li>
                    <li><a href="#" onClick={openMenu}>Delivery</a></li>
                    <li><a href="#" onClick={openMenu}>About</a></li>
                    <li><a href="#" onClick={openMenu}>Contacts</a></li>
                </menu>
            </div>
            <div className="right flex-center">
                Cart
                <img src={cart} alt="" />
                <div className="number flex-center">0</div>
                <button className='mobile-btn flex-center'>
                    <img src="https://img.icons8.com/color/144/000000/menu--v1.png" onClick={openMenu} /></button>
            </div>
        </div>
    </nav>);
}
