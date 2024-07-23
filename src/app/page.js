import React from "react";
import Navbar from "../components/upBox/navbar";
import Hero from "../components/upBox/hero";
import Sec2 from "../components/upBox/sec2";
import Sec3 from "../components/upBox/sec3";
import Sec4 from "../components/upBox/sec4";
import Footer from "../components/upBox/footer";
import '../styles/upBox.scss';

export default function Home() {
  return (
    <body>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <footer>
          <Footer />
        </footer>
      </main>
    </body>
  );
}
