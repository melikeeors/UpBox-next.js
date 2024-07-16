import React from "react";
import Navbar from '../../../components/content/navbar';
import PopUp from "../../../components/contact/pop-up";
import Footer from '../../../components/upBox/footer';

export default function contact() {
    return (
        <body>
            <nav>
                <Navbar />
            </nav>
            <main>
                <section>
                    <PopUp />
                </section>
                <footer>
                    <Footer />
                </footer>
            </main>
        </body>
    );
}