import React from "react";
import "./styles/open.css";

const Envelope = () => {
  const openUp = () => {
    const $opentop = document.querySelector("#opentop");
    const $top = document.querySelector("#top");
    const $front = document.querySelector("#front");
    const $back = document.querySelector("#back");
    const $letter = document.querySelector("#letter");
    const $button = document.querySelector("button");

    $opentop.beginElement();
    $top.style.zIndex = 2;

    $top.classList.add("animate");
    $front.classList.add("animate");
    $back.classList.add("animate");
    $button.classList.add("animate");
    $letter.classList.add("animate");
  };

  return (
    <div>
      <div className="text">
        <h1>Hey Baby! Listen, this one's for you 💖....</h1>
      </div>
      <div id="envelope">
        <div id="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="300"
            width="300"
          >
            <polygon
              points="0,100 300,100 300,300 0,300"
              style={{ fill: "#4a274a", stroke: "none", strokeWidth: 0 }}
            />
          </svg>
        </div>
        <div id="front">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="300"
            width="300"
          >
            <polygon
              points="0,100 150,200 300,100 300,300 0,300"
              style={{ fill: "#2abad0", stroke: "#ffffff", strokeWidth: 3 }}
            />
          </svg>
        </div>
        <div id="top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="300"
            width="300"
          >
            <polygon
              points="0,100 150,200 300,100"
              style={{ fill: "#2abad0", stroke: "#ffffff", strokeWidth: 2 }}
            >
              <animate
                id="opentop"
                attributeName="points"
                dur="0.5s"
                fill="freeze"
                begin="indefinite"
                from="0,100 150,200 300,100"
                to="0,100 150,0 300,100"
              />
            </polygon>
          </svg>
        </div>

        <div id="letter">
          <h1>For My <span>Love</span></h1>
          <p>
            You are the person I have been dreaming all my life, so allow me to
            express my intense love for you. You are the most precious thing in my
            life. You have fascinated my heart and seized my mind with your
            magnetic presence and I keep dreaming of yourself. Your memories are
            invaluable treasure of my life, which are locked inside my heart. The
            time spent with you was the most mesmerizing and delightful of my
            life. <br />
            <br />
            I take this opportunity to ask for your consent if you want to be my
            life partner. This letter is a token of my love for you. <br />
            If You Accept <a href="/new">Click Here</a>
          </p>
        </div>
        <button onClick={openUp}>Click Here</button>
      </div>
    </div>
  );
};

export default Envelope;