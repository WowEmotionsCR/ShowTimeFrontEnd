import React, { useState } from "react";
import { FaEdit, FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Div from "./div";

const CardScene = ({
  textScene,
  x,
  y,
  z = 2,
  sceneIMG,
  cardMode,
  onClick,
  selected,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Div width={350} positionY={y} positionX={x} zIndex={z}>
      <div
        className={`card rounded-2xl m-none p-none shadow " ${
          onClick && " cursor-pointer "
        } " " ${selected ? " bg-primary " : " bg-dark "}`}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onClick={onClick && onClick}
      >
        <img
          src={sceneIMG}
          className="card-img-top h-15 card-sceneIMG"
          alt="..."
        />
        <div
          className={`card-body d-flex  text-white " ${
            cardMode == "showScene"
              ? " justify-content-between "
              : " justify-content-center "
          }`}
        >
          <h5 className="card-title poppins-medium">
            {selected && <FaCheckCircle className="me-2" />}
            {textScene}
          </h5>

          {cardMode == "showScene" && (
            <div
              className={`col-2 d-flex justify-content-between " ${
                hover ? " btn-show " : " btn-hidden "
              }`}
            >
              <div className="rounded-circle btn-bgcard w-3 h-3 my-auto d-flex justify-content-center mx cursor-pointer">
                <FaEdit className="btn-card my-auto fs-7" />
              </div>
              <div className="rounded-circle btn-bgcard w-3 h-3 my-auto d-flex justify-content-center mx cursor-pointer">
                <MdDeleteForever className="btn-card my-auto fs-5" />
              </div>
            </div>
          )}
        </div>
      </div>
    </Div>
  );
};

export default CardScene;
