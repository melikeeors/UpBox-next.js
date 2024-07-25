import React from "react";
import Image from 'next/image';
import underline1 from '/public/images/underline1.png';
import work1 from '/public/images/work1.svg';
import work2 from '/public/images/work2.svg';
import work2Mobile from '/public/images/work2-mobile.svg';
import work3 from '/public/images/work3.svg';

export default function Sec3() {
  return (
    <div className="sec3">
      <div className="sec3__header">
        <h1 className="sec3__title">How it works?</h1>
        <Image src={underline1}></Image>
      </div>
      <div className="sec3__work1">
        <div className="sec3__img">
          <Image src={work1}></Image>
        </div>
        <div className="sec3__text1">
          <h3>Setup your profile & preferences</h3>
          <p>Once you create an account, you can start to tell us your likes
            and dislikes so we can tailor the experience just for you.</p>
        </div>
      </div>
      <div className="sec3__work2">
        <div className="sec3__img">
          <Image className="sec3__2" src={work2}></Image>
          <Image className="sec3__2-mobile" src={work2Mobile}></Image>
        </div>
        <div className="sec3__text2">
          <h3>Review your custom box</h3>
          <p>Once we get to know you, we will show you the box we’ve crafted.
            This is your chance to approve it before we ship it to your house.</p>
        </div>
      </div>
      <div className="sec3__work3">
        <div className="sec3__img">
          <Image src={work3}></Image>
        </div>
        <div className="sec3__text3">
          <h3>Try it on at home</h3>
          <p>Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox.
            Try it all on and send back whatever you’re not in love with.</p>
        </div>
      </div>
      <div className="sec3__button">
        <button>TRY IT FOR YOURSELF &gt;</button>
      </div>

    </div>
  );
}
