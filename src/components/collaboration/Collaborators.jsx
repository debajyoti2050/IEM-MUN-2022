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
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import SwiperCore, { Autoplay } from "swiper";

import React from "react";

export default function Collaborators() {
    SwiperCore.use([Autoplay]);
  return (
    <section id="clients">
      <div className="container" data-aos="zoom-in">
        <header className="section-header">
          <h3>Our Previous Collaboration</h3>
        </header>

        <div className="clients-slider swiper colaboration">
          <div className="swiper-wrapper align-items-center">
            <>
              <Swiper
                slidesPerView={5}
                spaceBetween={40}
                // breakpoints={{
                //     768: {
                //       // width: 768,
                //       slidesPerView: 3,
                //       spaceBetween:100,
                //     },
                //   }}
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
              >
                <SwiperSlide><div className="imgcenter"><img src={Applex} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={CYIMUN} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter1"><img src={Greenlogo} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={IDC} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={IMC} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={JMUN} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={Logo1} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={Logo2} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={MUNA} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={MUNAG} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={Nincompoop} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={OMUN} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={Onuu} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={RM} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={UB} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={INDBHU} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter1"><img src={UN75} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><img src={WPIMUN} className="img-fluid" alt="" /></div></SwiperSlide>
              </Swiper>
            </>
          </div>
          
        </div>
      </div>
    </section>
  );
}
