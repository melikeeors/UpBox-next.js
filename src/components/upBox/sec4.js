import React from "react";
import Image from 'next/image';
import img1 from '../../images/img1.svg';
import img2 from '../../images/img2.svg';
import img3 from '../../images/img3.svg';
import img4 from '../../images/img4.svg';
import squig1 from '../../images/squig1.svg';
import squig2 from '../../images/squig2.svg';

export default function Sec4() {
  return (
    <div className="sec4">
      <h1 className="sec4__title">Social Posts</h1>
      <div className="sec4__img-blocks">
        <div className="sec4__img-block">
          <Image src={img1}></Image>
          <p>How to rock the lip look that turns heads</p>
        </div>
        <div className="sec4__img-block">
          <Image src={img2}></Image>
          <p>Find the perfect shade for the season</p>
        </div>
        <div className="sec4__img-block">
          <Image src={img3}></Image>
          <p>The 5 eye shadow secrets you never knew</p>
        </div>
        <div className="sec4__img-block">
          <Image src={img4}></Image>
          <p>The pro-tips for at home hair dying</p>
        </div>
      </div>
      <Image className="sec4__squig1" src={squig1}></Image>
      <Image className="sec4__squig2" src={squig2}></Image>
      <div className="sec4__button">
        <button>FOLLOW US ON INSTAGRAM</button>
      </div>
    </div>
  );
}
