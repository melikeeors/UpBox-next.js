import React from "react";
import Image from 'next/image';
import underline1 from '../../images/underline1.png';
//import work1 from '../../images/work1.png';
import work2 from '../../images/work2.png';
//import work3 from '../../images/work3.png';

export default function Home() {
  return (
    <div className="sec3">
      <div className="sec3__header">
        <h1 className="sec3__title">How it works?</h1>
        <Image src={underline1}></Image>
      </div>
      <div className="sec3__work1">
        <div className="sec3__img">
          <Image></Image>
        </div>
        <div className="sec3__text">
          <h3>Setup your profile & preferences</h3>
          <p>Once you create an account, you can start to tell us your likes
            and dislikes so we can tailor the experience just for you.</p>
        </div>
      </div>
      <div className="sec3__work2">
        <div className="sec3__text">
          <h3>Review your custom box</h3>
          <p>Once we get to know you, we will show you the box we’ve crafted.
            This is your chance to approve it before we ship it to your house.</p>
        </div>
        <div className="sec3__img">
          <Image src={work2}></Image>
        </div>
      </div>
      <div className="sec3__work3">
        <div className="sec3__img">
          <Image></Image>
        </div>
        <div className="sec3__text">
          <h3>Try it on at home</h3>
          <p>Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox.
            Try it all on and send back whatever you’re not in love with.</p>
        </div>
      </div>
      <button>TRY IT ON FOR YOURSELF &gt;</button>
    </div>
  );
}
