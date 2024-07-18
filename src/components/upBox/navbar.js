import React from "react";
import Image from 'next/image';
import upboxLogo from '../../images/upboxLogo.svg';
import topbar from '../../images/topbar.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <Image className="navbar__topbar" src={topbar}></Image>
      <div className="navbar__group">
        <div className="navbar__logoGroup">
          <Image className="navbar__logo" src={upboxLogo}></Image>
          <h3 className="navbar__title">UPBOX</h3>
        </div>
        <div className="navbar__right-side">
          <h3>THIS MONTH</h3>
          <h3>SKIN</h3>
          <h3>HAIR</h3>
          <h3>BATH</h3>
          <h3>SALE</h3>
          <button>LOG IN &gt;</button>
        </div>
      </div>
    </div>
  );
}
