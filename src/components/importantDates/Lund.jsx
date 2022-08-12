import React from 'react';
import moment from 'moment';
import "./dates.css"

const endDate = new Date("2022-10-14T03:24:00");

const Countdown = ({ }) => {

    const [[days, hours, mins, secs], setTime] = React.useState([0, 0, 0,0]);
    

    React.useEffect(() => {
    const id = setInterval(() => {
      const es = endDate.getTime();
      const ss = new Date().getTime();
      let diff = es - ss;

      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      const hours = Math.ceil((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.ceil((diff / (1000 * 60)) % 60);
      const secs = Math.ceil((diff / 1000) % 60);

     setTime([days, hours, mins, secs]);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  });

  return (
    <div className="countdown">
      <div className="card">
        <div className="countdown-value">{days}</div>
        <div className="countdown-unit">Days</div>
      </div>
      <div className="card">
        <div className="countdown-value">{hours}</div>
        <div className="countdown-unit">Hours</div>
      </div>
      <div className="card">
        <div className="countdown-value">{mins}</div>
        <div className="countdown-unit">Mins</div>
      </div>
      <div className="card">
        <div className="countdown-value">{secs}</div>
        <div className="countdown-unit">Secs</div>
      </div>
     {/*  <p>Counting down to {eventName} on {moment.unix(unixEndDate).format('dddd, MMMM Do, YYYY | h:mm A')}</p> */}
    </div>
  );
}

export default Countdown;