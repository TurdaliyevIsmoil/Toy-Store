import React from "react";
import './style.scss';

export default function VideoModal({ children, toggle }) {
  return (
    <div className="video-modal flex-center">
      <div className="backdrop" onClick={toggle}></div>
      <div className="video">
        {children}
      </div>
    </div>
  );
}
