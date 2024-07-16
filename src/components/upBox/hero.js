import React from "react";
import Image from 'next/image';
import box from '../../images/box.png';

export default function Home() {
  return (
    <div className="hero">
      <div className="hero__left">
        <div className="hero__bg">
          <h1>Look good without leaving your house.</h1>
          <p>Upbox is the easiest way to look your best without having to hunt
            for the perfect makeup combination. Our stylists curate the latest trends
            and send them directly to your door every month.
          </p>
          <button>Sign Up &gt;</button>
        </div>
        <div className="hero__box">
          <Image src={box}></Image>
        </div>
      </div>
    </div>
  );
}
