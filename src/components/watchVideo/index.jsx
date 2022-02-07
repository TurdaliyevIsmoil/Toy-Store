import { useState, useRef } from 'react';
import btn from '../../images/videobtn.png';
import './style.scss';
import VideoModal from './Modal';


export default function (props) {
    const [modal, setmodal] = useState(false);
    const toggle = () => setmodal(!modal);
    return (
        <div className='watchVideo'>
            <div className="container flex-center">
                <div className="topline">About The Shop</div>
                <div className="title">Watch Our Story</div>
                <p>There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer's mood.</p>
                <button><img src={btn} alt="Play Video" onClick={toggle} /></button>
                {modal &&
                    <VideoModal toggle={toggle}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/eHb33AkEgdU"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </VideoModal>
                }
            </div>
        </div>);
}
