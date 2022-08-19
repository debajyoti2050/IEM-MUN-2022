import React, { Component }  from 'react';
import About from "../components/about/About";
import Collaborators from "../components/collaboration/Collaborators";
import Committee from "../components/committee/Committee";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/navbar";
import Dates from "../components/importantDates/Dates";
import AOS from "aos";
import "aos/dist/aos.css";
import Map from "../components/gmap/Map";


export default function Homepage() {
  return (
    <>
      <main id="main">
        <Navbar homenav/>
        <Hero />
        <Dates />
        <About />
        <Committee />
        <Collaborators/>
        <Contact />
      </main>
      <Map/>
      <Footer />

    </>
  );
}
