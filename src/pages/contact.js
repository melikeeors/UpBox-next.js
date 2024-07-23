import React from "react";
import ContactNav from '@/components/contact/contact-navbar';
import PopUp from "@/components/contact/pop-up";
import Footer from '@/components/upBox/footer';
import '../styles/contact.scss';

export default function Contact() {
    return (
        <>
            <nav>
                <ContactNav />
            </nav>
            <main>
                <PopUp />
                <footer>
                    <Footer />
                </footer>
            </main>
        </>
    );
} 