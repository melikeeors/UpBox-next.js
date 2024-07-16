import React from "react";
import Image from 'next/image';
import underline from '../../images/underline.png';

export default function Home() {
  return (
    <div className="sec2">
      <div className="sec2__header">
        <h1 className="sec2__title">Pick your plan</h1>
        <Image src={underline}></Image>
      </div>
      <div className="sec2__plans">
        <div className="sec2__plan1">
          <h3>Monthly</h3>
          <p>$18/mo</p>
          <button>FIND YOUR BOX</button>
        </div>
        <div className="sec2__plan2">
          <h3>Yearly</h3>
          <p>$15/mo</p>
          <button>FIND YOUR BOX</button>
        </div>
      </div >
      <p>Your plan auto-renews at the end of 30 days from the 1st day you signed-up.</p>
    </div>
  );
}
