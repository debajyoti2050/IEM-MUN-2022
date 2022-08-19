import "./committee.css";
import INCabinet from "../../assets/committee/IndianCabinet Ministry of Finance.png";
import UNOcean from "../../assets/committee/UN OCEAN CONFERENCE.png";
import UNGA from "../../assets/committee/UNGA.png";
import UNITAR from "../../assets/committee/UNITAR.png";
import IP  from "../../assets/committee/IP.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import SwiperCore, { Autoplay } from "swiper";

import React from "react";
import { Link } from "react-router-dom";

export default function Committee() {
  SwiperCore.use([Autoplay]);
  return (
    <section id="committees" className="section-bg">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>COMMITTEE</h3>
        </header>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100" >
          <div className="swiper-wrapper">
            <>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
                }}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="swiper-slide"
              >
                <SwiperSlide>
                  <div className="testimonial-item">
                    <img src={UNGA} className="testimonial-img" alt="" />
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
                    <Link to='/committeedesc'>
                      <a href="/committeedesc" className="btn-get-started scrollto " data-aos="fade-in-up" data-aos-delay="400">
                        Explore More
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-item">
                    <img src={UNITAR} className="testimonial-img" alt="" />
                    <h3>
                      UNITED NATIONS INSTITUTE FOR TRAINING AND RESEARCH
                      (UNITAR)
                    </h3>
                    <p>
                      “A superior man is modest in his speech, but exceeds in
                      his actions.”— Confucius
                      <br />
                      <br />
                      IEM MUN 2022 is delighted to bring to you the United
                      Nations Institute for Training and Research
                      (UNITAR).UNITAR is a dedicated training arm of the United
                      Nations, serving more than 130,000 beneficiaries annually
                      by conducting close to 700 training and research
                      activities around the world.The Mission of UNITAR is to
                      develop capacities to enhance global decision-making and
                      to support country level action for shaping a better
                      future.
                    </p>
                    <Link to='/committeedesc'>
                      <a href="/committeedesc" className="btn-get-started scrollto " data-aos="fade-in-up" data-aos-delay="400">
                        Explore More
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-item">
                    <img src={UNOcean} className="testimonial-img" alt="" />
                    <h3>UN OCEAN CONFERENCE</h3>
                    <p>
                      “We cannot have a healthy planet without a healthy ocean.
                      Together, let us do our part to make a difference for the
                      ocean and for ourselves” UN-Secretary - António Guterres
                      <br />
                      <br />
                      IEM MUN 2022 is delighted to bring to you the United
                      Nations Ocean Conference. UN-Oceans is an inter-agency
                      mechanism that seeks to enhance the coordination,
                      coherence, and effectiveness of competent organisations of
                      the United Nations system and the International Seabed
                      Authority, in conformity with the United Nations
                      Convention on the Law of the Sea, the respective
                      competencies of each of its participating organisations
                      and the mandates and priorities approved by their
                      respective governing bodies. <br />
                      Let’s join hands to preserve the oceans which sustain us.
                    </p>
                    <Link to='/committeedesc'>
                      <a href="/committeedesc" className="btn-get-started scrollto " data-aos="fade-in-up" data-aos-delay="400">
                        Explore More
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-item">
                    <img src={INCabinet} className="testimonial-img" alt="" />
                    <h3>INDIAN CABINET MINISTRY OF FINANCE</h3>
                    <p>
                      When your values are clear to you, making decisions
                      becomes easier.”- Roy E. Disney
                      <br />
                      <br />
                      IEM MUN 2022 brings to you the Indian Cabinet: Ministry of
                      Finance. The Ministry of Finance is a ministry within the
                      Government of India concerned with the economy of India,
                      serving as the Treasury of India. In particular, it
                      concerns itself with taxation, financial legislation,
                      financial institutions, capital markets, centre and state
                      finances, and the Union Budget.
                      <br />
                      Come join us in debates and conversations and strive to
                      lead your team to victory!
                    </p>
                    <Link to='/committeedesc'>
                      <a href="/committeedesc" className="btn-get-started scrollto " data-aos="fade-in-up" data-aos-delay="400">
                        Explore More
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
                  <SwiperSlide>
                  <div className="testimonial-item">
                    <img src={IP} className="testimonial-img" alt="" />
                    <h3>INTERNATIONAL PRESS (IP)</h3>
                    <p>
                     "Freedom of the press is the mortar that binds together the bricks of democracy- 
                     and it is also the open window embedded in those bricks." - Shashi Tharoor

                      <br />
                      <br />
                      IEM MUN 2022 is delighted to bring to you the International Press delegation. 
                      The committee is assigned to unravel the day to day activities in IEM-MUN. 
                      It is an act of journalism that allows its members to display their writing, 
                      editing and presentation skills. International Press acts as the eyes for general public
                       that gyrates around reporting of all the debates and other events in IEM-MUN 2022

                      <br />
                    Block your calendars on the 14th, 15th and 16th of October, 2022, 
                    for an eventful weekend of discourse and exchange.
                    </p>
                    <Link to='/committeedesc'>
                      <a href="/committeedesc" className="btn-get-started scrollto " data-aos="fade-in-up" data-aos-delay="400">
                        Explore More
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </section>
  );
}
