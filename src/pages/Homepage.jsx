import React from "react";
import About from "../components/about/About";
import Committee from "../components/committee/Committee";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Dates from "../components/importantDates/Dates";


export default function Homepage() {
  return (
    <>
      <main id="main">
        <Header />
        <Hero />
        <Dates />
        <About />
        <Committee />
        <Contact />
      </main>
      <Footer />

    </>
  );
}
