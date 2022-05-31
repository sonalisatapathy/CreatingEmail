import React from "react";
import "./DesignComponents.css";
// import { IconContext } from "react-icons/lib";
import { BiImage, BiShareAlt } from "react-icons/bi";
import { ImTextColor } from "react-icons/im";
import { BsFillPencilFill, BsThreeDots, BsX } from "react-icons/bs";
import { AiFillStar, AiOutlineFileImage } from "react-icons/ai";
import { SiBigbluebutton } from "react-icons/si";
const DesignComponents = () => {
  return (
    <div className="DesignCompWrapper">
      DesignComponents
      <div className="content">Contents</div>
      <ul className="eachSection">
        <li>
          <ImTextColor />
        </li>
        <li>
          <BiImage />
        </li>
        <li>
          <SiBigbluebutton />
        </li>
      </ul>
      <ul>
        <li>
          <BsThreeDots />
        </li>
        <li>
          <BsX />
        </li>
        <li>
          <BiShareAlt />
        </li>
      </ul>
      <ul>
        <li>
          <BsFillPencilFill />
        </li>
        <li>
          <AiFillStar />
        </li>
        <li>
          <AiOutlineFileImage />
        </li>
      </ul>
    </div>
  );
};

export default DesignComponents;
