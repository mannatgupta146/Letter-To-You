import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../styles/open.css";

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
        <h1>Hey, open up! A surprise awaits. ✨</h1>
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
          <h1>For My <span>Madam Ji</span></h1>
          <p>
          You are the one who has filled my world with magic and meaning. 
          Your presence captivates my heart and lingers in my thoughts, making every moment unforgettable. 
          The memories we've created are my most treasured keepsakes, locked safely within me. 
          Every second spent with you has been nothing short of mesmerizing, and I look forward to all the beautiful moments yet to come. <br />
            <br />
            I want to take this moment to ask if you would walk this journey of life with me. 
            This letter is a heartfelt token of what you mean to me.  <br />
            <br />
            If your heart says yes, <Link to="/new">Click Here</Link> 
          </p>
        </div>
        <button onClick={openUp}>Open Letter</button>
      </div>
    </div>
  );
};

export default Envelope;