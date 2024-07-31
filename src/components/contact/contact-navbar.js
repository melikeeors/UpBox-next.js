'use client';
import Image from 'next/image';
import upboxLogo from '/public/images/upboxLogo.svg';
import topbar from '/public/images/topbar.svg';
import { IoMdMenu } from "react-icons/io";
import React, {useState} from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <Image className="navbar__topbar" src={topbar} alt='navbar-img'></Image>
      <div className="navbar__group">
        <div className="navbar__logoGroup">
          <Image className="navbar__logo" src={upboxLogo} alt='navbar-logo'></Image>
          <h3 className="navbar__title">UPBOX</h3>
          <a className="navbar__menu-button" onClick={toggleMenu}>
            <IoMdMenu />
          </a>
        </div>
        <div className="navbar__right-side">
          <h3>MAKEUP</h3>
          <h3>BATH</h3>
          <h3>SALE</h3>
          <button>LOG IN &gt;</button>
        </div>
        <div className={`navbar__menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>MAKEUP</li>
            <li>BATH</li>
            <li>SALE</li>
            <button>LOG IN &gt;</button>
          </ul>
        </div>
      </div>
    </div>
  );
}
