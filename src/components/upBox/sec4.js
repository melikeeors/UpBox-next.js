import React from "react";
import Image from 'next/image';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import squig1 from '../../images/squig1.png';
import squig2 from '../../images/squig2.png';

export default function Home() {
  return (
    <div className="sec4">
      <Image className="sec4__squig1" src={squig1}></Image>
      <Image className="sec4__squig2" src={squig2}></Image>
      <h1 className="sec4__title">Social Posts</h1>
      <div className="sec4__img-block">
        <div className="sec4__img-block1">
          <Image src={img1}></Image>
          How to rock the lip look that turns heads
        </div>
        <div className="sec4__img-block2">
          <Image src={img2}></Image>
          Find the perfect shade for the season
        </div>
        <div className="sec4__img-block3">
          <Image src={img3}></Image>
          The 5 eye shadow secrets you never knew
        </div>
        <div className="sec4__img-block4">
          <Image src={img4}></Image>
          The pro-tips for at home hair dying
        </div>
      </div>
      <button className="sec4__button">FOLLOW US ON INSTAGRAM</button>
    </div>
  );
}
