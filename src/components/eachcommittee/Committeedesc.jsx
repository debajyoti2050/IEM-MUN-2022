import React,{useEffect} from "react";

import "./committeedesc.css";
import Data from "./data";
import Card from "./Card";
import NavbarFixed from "../navbar/navbar";
import Footer from "../footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Committeedesc = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      useEffect(() => {
        AOS.init();
        AOS.refresh();
      },[]);

  return (
    <>
      <NavbarFixed />
      <section id="coommitteedesc" className="pt-5">
        <div className="container pt-5" data-aos="fade-up" data-aos-delay="600">
          <div className="section-header">
            <h3>Our Committees</h3>
          </div>

          {Data.map((e) => {
            return (
              <Card
                image={e.Cimage}
                cname={e.Cname}
                quote={e.Quote}
                quotespeak={e.Quotespeaker}
                desc={e.Desc}
                agenda={e.Agenda}
                guide1={e.GuideLine1}
                guide2={e.Guideline2}
                s1img={e.Speaker1img}
                s1name={e.Speaker1name}
                s2img={e.Speaker2img}
                s2name={e.Speaker2name}
              />
            );
          })}

          {/* <div className="container pb-5">
        <div className="row">
            <div className="col-lg-4 psimage">
                <img src={image1} className="imgsz" alt=""/>
            </div>
            <div className="col-lg-7 mt-3 testimonial-item">
            <h3>UNITED NATIONS GENERAL ASSEMBLY (UNGA)</h3>
                <p>
                  “More than ever before in human history, we share a common
                  destiny. We can master it only if we face it together. And
                  that, my friends, is why we have the United Nations.”
                  -Kofi Anan, 7th Secretary-General of the UN
                  <br />
                  <br />
                  IEM MUN 2022 is delighted to bring to you the United
                  Nations General Assembly (UNGA), the main policy making
                  organ comprising all member states. Comprising all Member
                  States, it provides a unique forum for multilateral
                  discussion of the full spectrum of international issues
                  covered by the Charter of the United Nations, Decisions on
                  key issues like international peace and security,
                  admitting new members and the UN budget, among others, are
                  taken by the UNGA.
                </p>
            </div>
        </div>
        <div className="row">
        <div class="d-flex justify-content-start">
            <div className="pt-1">
                <h3>Agendas</h3>
            </div>
        </div>
        <div>
                <p>
                An agenda lists the items of business to be taken up during a meeting or session.[3] It may also be called a "calendar".[4] A meeting agenda may be headed with the date, time and location of the meeting, followed by a series of points outlining the order in which the business is to be conducted. Steps on any agenda can include any type of schedule or order the group wants to follow. Agendas may take different forms depending on the specific purpose of the group and may include any number of the items.
                </p>
            </div>
        </div>
        <div className="row">
        <div class="d-flex justify-content-start">
            <div className="pt-1">
                <h3>Guidelines</h3>
            </div>
        </div>
        <div>
                <p>
                An agenda lists the items of business to be taken up during a meeting or session.[3] It may also be called a "calendar".[4] A meeting agenda may be headed with the date, time and location of the meeting, followed by a series of points outlining the order in which the business is to be conducted.
                </p>
                <br/>
                <p>
                An agenda lists the items of business to be taken up during a meeting or session.[3] It may also be called a "calendar".[4] A meeting agenda may be headed with the date, time and location of the meeting, followed by a series of points outlining the order in which the business is to be conducted.
                </p>
            </div>
        </div>
        <div className="row single">
        <div class="d-flex justify-content-start">
            <div className="pt-1">
                <h3>Speakers</h3>
            </div>
        </div>
            <div className="col-lg-4 person"><div className='imgcenter'><img src={image1} alt=""/></div>
                <div className="info mt-2"><h3>Lorem Ipsum</h3><p>-Vice Chairperson</p></div>
            </div>
            <div className="col-lg-4 person"><div className='imgcenter'><img src={image1} alt=""/></div>
                <div className="info mt-2"><h3>Lorem Ipsum</h3><p>-Vice Chairperson</p></div>
            </div>
        </div>
    </div> */}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Committeedesc;
