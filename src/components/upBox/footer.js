import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import upboxLogo from '../../images/upboxLogo.svg';
import { BiLogoFacebookSquare } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__logoGroup">
          <Image className="footer__logo" src={upboxLogo} alt="Upbox Logo" />
          <h5>UPBOX</h5>
        </div>
        <div className="footer__social">
          <a href="#"><IoLogoInstagram /></a>
          <a href="#"><BiLogoFacebookSquare /></a>
          <a href="#"><FaSquareTwitter /></a>
          <a href="#"><FaSnapchatSquare /></a>
        </div>
      </div>
      <div className="footer__links">
        <div className="footer__link">
          <h4>UPBOX</h4>
          <a href="#">Upbox Bag</a>
          <a href="#">Upbox Box Platinum</a>
          <a href="#">Upbox Box VIP</a>
          <a href="#">Deals</a>
          <a href="#">Seasonal Items</a>
          <a href="#">Upbox Promise</a>
        </div>
        <div className="footer__link">
          <h4>Find Us On</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
          <a href="#">SnapChat</a>
          <a href="#">Twitter</a>
        </div>
        <div className="footer__link">
          <h4>Product</h4>
          <a href="#">Get the App</a>
          <a href="#">Loyalty Program</a>
          <a href="#">Affiliates</a>
          <a href="#">Press</a>
        </div>
        <div className="footer__link">
          <h4>Help</h4>
          <a href="#">Returns</a>
          <a href="#">FAQ</a>
          <Link href='/contact'>Contact</Link>
          <a href="#">Community</a>
          <a href="#">Videos</a>
        </div>
      </div>
      <div className="footer__end">
        <p>© 2020 Quest AI. Upbox is a Sample Project and
          open source design project free for personal and commercial use.</p>
        <a href="#">Terms</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
}
