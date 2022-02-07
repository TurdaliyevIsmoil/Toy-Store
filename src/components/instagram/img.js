import React from 'react';
import './style.scss';

export default function Img({children}) {
  return (<img className='instagram-image' draggable="false" src={children} />);
}
