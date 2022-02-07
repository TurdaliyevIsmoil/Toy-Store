import './style.scss';
import img from '../../images/about.png'

export default function () {
    return (<div className='delivery'>
        <div className="top flex-center">
            <div className="topline">Made for Webflow</div>
            <div className="title">Simple & Colorful Ecommerce Template for Your Business</div>
        </div>
        <div className="row container">
            <div className="div flex-center">
                <h2 className='title'>
                    Available for FREE!
                </h2>
                <span></span>
                <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
                <a href="#" className='call-to-action'>GET IT NOW</a>
            </div>
            <div className='flex-center'><img src={img} alt="" /></div>

        </div>
    </div>);
}
