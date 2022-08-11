import "./collaborators.css";
import Applex from "../../assets/collaboration/applex.in.jpg";
import CYIMUN from "../../assets/collaboration/CYIMUN.png";
import Greenlogo from "../../assets/collaboration/green logo.png";
import IDC from "../../assets/collaboration/IDC.jpg";
import IMC from "../../assets/collaboration/IMC.jpg";
import JMUN from "../../assets/collaboration/jmun.jpeg";
import Logo1 from "../../assets/collaboration/Logo_1.png";
import Logo2 from "../../assets/collaboration/logo_2.jpg";
import MUNA from "../../assets/collaboration/MUNA LOGO.png";
import MUNAG from "../../assets/collaboration/MUNAG.jpg";
import Nincompoop from "../../assets/collaboration/nincompoop.jpg";
import OMUN from "../../assets/collaboration/OMUN.png";
import Onuu from "../../assets/collaboration/onuuu.png";
import RM from "../../assets/collaboration/RM.jpg";
import UB from "../../assets/collaboration/UB.png";
import INDBHU from "../../assets/collaboration/UN- India and Bhutan-logo.jpg";
import UN75 from "../../assets/collaboration/UN75_logo.jpg";
import WPIMUN from "../../assets/collaboration/WPIMUN.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";

import React from "react";

export default function Collaborators() {
    SwiperCore.use([Autoplay]);
  return (
    <section id="clients">
      <div className="container" data-aos="zoom-in">
        <header className="section-header">
          <h3>Our Previous Colaboration</h3>
        </header>

        <div className="clients-slider swiper colaboration">
          <div className="swiper-wrapper align-items-center">
            <>
              <Swiper
                slidesPerView={6}
                spaceBetween={40}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="swiper-slide"
              >
                <SwiperSlide><img src={Applex} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={CYIMUN} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={Greenlogo} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={IDC} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={IMC} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={JMUN} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={Logo1} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={Logo2} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={MUNA} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={MUNAG} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Nincompoop} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={OMUN} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={Onuu} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={RM} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={UB} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={INDBHU} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide> <img src={UN75} class="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src={WPIMUN} class="img-fluid" alt="" /></SwiperSlide>
               


              </Swiper>
            </>
          </div>
          
        </div>
      </div>
    </section>
  );
}
