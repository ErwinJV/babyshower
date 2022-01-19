import React, { useState } from "react";


import starleft from "../assets/img/happy-star-left.webp";
import starright from "../assets/img/happy-star-right.webp";
import Streaming from "./Streaming";

const ThankYou = () => {
  const [seconds, setSeconds] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [days, setDays] = useState();

  let deadline = "Feb 05 2022 5:00:00 GMT-0500";

  const remainTime = (deadline) => {
    let time = new Date();
    let hora = time.getHours();
    let minutos = time.getMinutes();

    if (hora == 20 && minutos == 29) {
      console.log("sorpresa!!!");
    }

    let now = new Date(),
      remainTime = (new Date(deadline) - now + 1000) / 1000,
      remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
      remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
      remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
      remainDays = ("0" + Math.floor(remainTime / (3600 * 24))).slice(-2);

    setSeconds(remainSeconds);
    setMinutes(remainMinutes);
    setHours(remainHours);
    setDays(remainDays);
  };

  const countdown = (deadline) => {
    const timerUpdate = setInterval(() => {
      remainTime(deadline);
    }, 1000);
  };

  const showStreaming = () => {
     
     document.getElementById("clock").classList.add = "d-none"
     document.getElementById("streaming").classList.remove = "d-none"
  }

  countdown(deadline);

  return (
    <div className="container-fluid  time-counter px-0 ">
      <div className="contenedor w-100  bg-primary d-flex justify-content-center justify-content-xl-between">
        <img src={starleft} className=" d-xl-block" alt="" />

        <div className="clock  d-flex flex-column align-self-center justify-content-around  rounded-circle bg-light p-2" id="clock">
          <span className="fs-2 align-self-center ">Babyshower</span>

          <div className="countdown align-self-center d-flex justify-content-around  ">
            <div className="d-flex flex-column  fw-bolder   fs-2">
              <span className="align-self-center">{days}</span>
              <span className="fs-6 fw-normal align-self-center">Days</span>
            </div>
            <div className="d-flex flex-column  fw-bolder   fs-2">
              <span className="align-self-center">{hours}</span>
              <span className="fs-6 fw-normal align-self-center">Hours</span>
            </div>
            <div className="d-flex flex-column  fw-bolder   fs-2">
              <span className="align-self-center">{minutes}</span>
              <span className="fs-6 fw-normal align-self-center">Minutes</span>
            </div>
            <div className="d-flex flex-column  fw-bolder    fs-2">
              <span className="align-self-center">{seconds}</span>
              <span className="fs-6 fw-normal align-self-center">Seconds</span>
            </div>
          </div>

          <div className="rounded-pill p-2 align-self-center bg-announce text-white">
            Days for Babyshower
          </div>
        </div>

        <img src={starright} className="  d-xl-block" alt="" />
  
        
      </div>
    </div>
  );
};

export default ThankYou;
