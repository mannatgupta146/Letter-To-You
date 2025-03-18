import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../styles/style.css";

const Heart = () => {
  return (
    <div>
      <div className="heart">
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className="beloved"></div>
    </div>
  );
};

export default Heart;