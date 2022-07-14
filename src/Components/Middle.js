import React from "react";
import styled from "styled-components";
import bgLogo from "../Assets/atgback.jfif";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
function Middle() {
  return (
    <MiddleStyled>
      <img src={bgLogo} alt="" className="backImage" />
      <ArrowBackIcon htmlColor="white" className="arrow" />
      <Link to="/join">
        <button className="join">Join Group</button>
      </Link>
      <div className="texts">
        <div className="text1">Computer Engineering</div>
        <div className="text2">142,454Computer Engineers follow us</div>
      </div>
    </MiddleStyled>
  );
}

const MiddleStyled = styled.div`
  margin: 0;
  .backImage {
    width: 100%;
    height: 390px;
    object-fit: cover;
    background-position: center;
  }
  .arrow {
    float: left;
    margin-left: 3rem;
    margin-top: -22rem;
    position: relative;
    @media screen and (min-width: 926px) {
      display: none;
    }
  }
  .join {
    float: right;
    margin-right: 3rem;
    margin-top: -22rem;
    background: transparent;
    position: relative;
    color: white;
    outline: none;
    border: 1px solid white;
    border-radius: 4px;
    padding: 4px;
    @media screen and (min-width: 926px) {
      display: none;
    }
  }

  .texts {
    .text1 {
      position: absolute;
      float: left;
      top: 250px;
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: bolder;
      font-size: 30px;
      color: white;
      margin-left: 55px;
      @media screen and (max-width: 525px) {
        font-size: 20px;
      }
    }
    .text2 {
      position: absolute;
      float: left;
      top: 290px;
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-size: 14px;
      margin-left: 55px;
      color: white;
      @media screen and (max-width: 525px) {
        font-size: 10px;
      }
    }
  }
`;
export default Middle;
