import tw from '../../images/tv.png';
import fb from '../../images/fb.png';
import ins from '../../images/ins.png';
import pr from '../../images/pr.png';
import yt from '../../images/yt.png';
import './style.scss';

export default function (props) {
    return (<menu className={`social-networks flex-center`}>
        <a href="#"><img src={tw} alt="Twitter" /></a>
        <a href="#"><img src={fb} alt="Facebook" /></a>
        <a href="#"><img src={ins} alt="Instagram" /></a>
        <a href="#"><img src={pr} alt="Pinterest" /></a>
        <a href="#"><img src={yt} alt="Youtube" /></a>
    </menu>);
}
