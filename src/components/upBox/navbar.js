import React from "react";
import Image from 'next/image';
import upboxLogo from '../../images/upboxLogo.png';
import topbar from '../../images/topbar.png';

export default function Home() {
  return (
    <div className="navbar">
      <Image src={topbar}></Image>
      <div className="navbar__logo">
        <Image src={upboxLogo}></Image>
        <h3>UPBOX</h3>
      </div>
      <div className="navbar__right-side">
        <h3>THIS MONTH</h3>
        <h3>SKIN</h3>
        <h3>HAIR</h3>
        <h3>BATH</h3>
        <h3>SALE</h3>
        <button>LOG IN</button>
      </div>
    </div>
  );
}