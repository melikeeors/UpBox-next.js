import React from "react";
import ContactNav from '@/components/contact/contact-navbar';
import PopUp from "@/components/contact/pop-up";
import Footer from '@/components/upBox/footer';

export default function Contact() {
    return (
        <>
            <nav>
                <ContactNav />
            </nav>
            <main>
                <section>
                    <PopUp />
                </section>
                <footer>
                    <Footer />
                </footer>
            </main>
        </>
    );
} 