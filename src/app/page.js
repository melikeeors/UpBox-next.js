import React from "react";
import Navbar from "../components/upBox/navbar";
import Hero from "../components/upBox/hero";
import Sec2 from "../components/upBox/sec2";
import Sec3 from "../components/upBox/sec3";
import Sec4 from "../components/upBox/sec4";
import Footer from "../components/upBox/footer";

export default function Home() {
  return (
    <body>
      <nav>
        <Navbar />
      </nav>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Sec2 />
        </section>
        <section>
          <Sec3 />
        </section>
        <section>
          <Sec4 />
        </section>
        <section>
          <footer>
            <Footer />
          </footer>
        </section>
      </main>
    </body>
  );
}
