import React from "react";
import Image from 'next/image';
import box from '/public/images/box.svg';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1>Look good without leaving your house.</h1>
        <p>Upbox is the easiest way to look your best without having to hunt
          for the perfect makeup combination. Our stylists curate the latest trends
          and send them directly to your door every month.
        </p>
        <button>SIGN UP &gt;</button>
      </div>
      <div className="hero__box">
        <Image src={box} alt="hero-img"></Image>
      </div>
    </div>
  );
}
