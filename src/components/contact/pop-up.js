import React from "react";
import Image from 'next/image';
import leftSide from '../../images/leftSide.svg';
import bg from '../../images/bg.svg'

export default function PopUp() {
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
                        <input className="pop-up__input-email" type="email" placeholder="Enter your email"></input>
                        <p className="pop-up__validations">Please enter a valid email address</p>
                        <p className="pop-up__validations">This field is required</p>
                    </div>
                    <div className="pop-up__text-field">
                        <label>Message</label>
                        <textarea className="pop-up__input-text" type="text" placeholder="Enter your message here"></textarea>
                        <p className="pop-up__validations">This field is required</p>
                    </div>
                    <div className="pop-up__checkbox-field">
                        <label>Opt-in to newsletter</label>
                        <input className="pop-up__checkbox" type="checkbox"></input>
                        <p className="pop-up__validations">This field is required</p>
                    </div>
                    <div>
                        <button className="pop-up__button">Submit</button>
                    </div>
                    <p className="pop-up__confirmations">Thanks! We’ll get back to you soon.</p>
                </div>
            </div>
            <Image className="pop-up__bg" src={bg} layout="fill"></Image>
        </div>
    );
}