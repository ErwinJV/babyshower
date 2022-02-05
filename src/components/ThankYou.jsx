import React, { useState, useEffect } from "react";

import starleft from "../assets/img/happy-star-left.webp";
import starright from "../assets/img/happy-star-right.webp";
import Streaming from "./Streaming";

const ThankYou = () => {
  const [seconds, setSeconds] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [days, setDays] = useState();

  const [deadline, setDeadline] = useState("Feb 05 2022 16:30:00 UTC-5");

  const remainTime = (deadline) => {
    let time = new Date();
    let hora = time.getHours();
    let minutos = time.getMinutes();

    let now = new Date(),
      remainTime = (new Date(deadline) - now + 1000) / 1000,
      remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
      remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-3),
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
    document.getElementById("clock").classList.add = "d-none";
    document.getElementById("contenedor").innerHTML = "<Streaming />";
  };

  countdown(deadline);

  useEffect(() => {
    const welcomeTitle = document.getElementById("welcome-title");
    const welcomeText = document.getElementById("welcome-text");
    const countdown = document.getElementById("countdown");
    let now = new Date();
    console.log(minutes);

    if (now.getFullYear() === 2022) {
      if (
        now.getDate() === 5 &&
        now.getMonth() === 1 &&
        hours <= 0 &&
        minutes <= 0 &&
        now.getHours() < 23
      ) {
        welcomeTitle.innerHTML =
          "¡Ingresa ahora a la trasmisión de nuestro babyshower!";
        welcomeText.innerHTML =
          "<a href='https://us04web.zoom.us/j/9625565005?pwd=QW83bWFrL1ZDMStBOElIQUIzazZMZz09' class='btn btn-lg bg-announce animate__animated animate__rubberBand animate__repeat-3 rounded-pill fw-bolder text-white' target='_blank' >Unete! </a> ";

        countdown.innerHTML =
          "<h4 class='fw-bolder text-center align-self-center'>Ya el babyshower ha comenzado!</h4>";
      } else if (now.getMonth() > 1 ) {

        countdown.innerHTML =
        "<h4 class='fw-bolder text-center align-self-center'>Ya el babyshower finalizo hace tiempo!</h4>";
      } 
    } else {

      countdown.innerHTML =
        "<h4 class='fw-bolder text-center align-self-center'>Ya el babyshower finalizo hace tiempo!</h4>";
    }
  });

  return (
    <div className="container-fluid  time-counter px-0 ">
      <div className="contenedor w-100  bg-primary d-flex justify-content-center justify-content-xl-between">
        <img src={starleft} className=" d-none d-xl-block " alt="" />

        <div
          className="clock  d-flex flex-column align-self-center justify-content-around  rounded-circle bg-light p-2"
          id="clock"
        >
          <span className="fs-2 align-self-center ">Babyshower</span>

          <div
            className="countdown align-self-center d-flex justify-content-around"
            id="countdown"
          >
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

        <img src={starright} className=" d-none d-xl-block " alt="" />
      </div>
    </div>
  );
};

export default ThankYou;
