import React from "react";
import Image from 'next/image';
import leftSide from '../../images/leftSide.png';

export default function Home() {
    return (
        <div className="pop-up">
            <div className="pop-up__center">
                <div className="pop-up__left-side">
                    <Image src={leftSide}></Image>
                </div>
                <div className="pop-up__right-side">
                    <h1>Let's Chat!</h1>
                    <div className="pop-up__input-field">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email"></input>
                        <p className="pop-up__validations--invalid">Please enter a valid email address</p>
                        <p className="pop-up__validations">This field is required</p>
                    </div>
                    <div className="pop-up__text-area">
                        <label>Message</label>
                        <input type="text" placeholder="Enter your message here"></input>
                        <p className="pop-up__validations">This field is required</p>
                    </div>
                    <div className="pop-up__checkbox">
                        <label>Opt-in to newsletter</label>
                        <input type="checkbox"></input>
                        <p className="pop-up__validations">This field is required</p>
                    </div>
                    <button className="pop-up__button">
                        Submit
                        <p className="pop-up__confirmations">Thanks! We’ll get back to you soon.</p>
                    </button>
                </div>
            </div>
        </div>
    );
}