import React from 'react'

export default function Card(props) {
  return (
    <div className="container pb-5">
            <div className="row"data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-4 psimage">
                    <img src={props.image} className="imgsz" alt=""/>
                </div>
                <div className="col-lg-7 mt-3 testimonial-item">
                <h3>{props.cname}</h3>
                    <p>
                      “{props.quote}”
                      -{props.quotespeak}
                      <br />
                      <br />
                     {props.desc}
                    </p>
                </div>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay="200">
            <div class="d-flex justify-content-start">
                <div className="pt-1">
                    <h3>Agendas</h3>
                </div>
            </div>
            <div>
                    <p>
                    {props.agenda}
                    </p>
                </div>
            </div>
            {/* <div className="row" data-aos="fade-up" data-aos-delay="200">
            <div class="d-flex justify-content-start">
                <div className="pt-1">
                    <h3>Guidelines</h3>
                </div>
            </div>
            <div>
                    <p>
                    {props.guide1}
                    </p>
                    <br/>
                    <p>
                    {props.guide2}
                    </p>
                </div>
            </div> */}
            <div className="row single" data-aos="fade-up" data-aos-delay="200">
            <div class="d-flex justify-content-start">
                <div className="pt-1">
                    <h3>Executive Board Members</h3>
                </div>
            </div>
                <div className="col-lg-4 person"><div className='imgcenter'><img src={props.s1img} alt=""/></div>
                    <div className="info mt-2"><h3>{props.s1name}</h3><p>-{props.s1position}</p></div>
                </div>
                <div className="col-lg-4 person"><div className='imgcenter'><img src={props.s2img} alt=""/></div>
                    <div className="info mt-2"><h3>{props.s2name}</h3><p>-{props.s2position}</p></div>
                </div>

            </div>
            <hr/>
        </div>
  )
}
