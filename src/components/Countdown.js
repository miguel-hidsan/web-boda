import React, { useEffect } from "react";

function Countdown() {
  useEffect(() => {
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
      let birthday = "Jul 8, 2022 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          let now = new Date().getTime(),
            distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(
            distance / day
          );
          document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          );
          document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          );
          document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          );

          //do something later when date is reached
          if (distance < 0) {
            // headline.innerText = "It's our wedding!";
            // countdown.style.display = "none";
            // content.style.display = "block";

            let headline = document.getElementById("headline");

            let countdown = document.getElementById("countdown");

            let content = document.getElementById("content");

            clearInterval(x);
          }
          //seconds
        }, 0);
      return null;
    })();
  }, []);
  return (
    <div
      id="countdown"
      className="section-padding bg-img bg-fixed"
      data-background="images/banner-1.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="section-head col-md-12">
            <h4>Quedan...</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul>
              <li>
                <span id="days"></span>Días
              </li>
              <li>
                <span id="hours"></span>Horas
              </li>
              <li>
                <span id="minutes"></span>Minutos
              </li>
              <li>
                <span id="seconds"></span>Segundos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
