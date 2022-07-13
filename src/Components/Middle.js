import React from "react";
import styled from "styled-components";
import bgLogo from "../Assets/atgback.jfif";
function Middle() {
  return (
    <MiddleStyled>
      <img src={bgLogo} alt="" className="backImage" />
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
  .texts {
    .text1 {
      position: absolute;
      width: 300px;
      height: 30px;
      left: 130px;
      top: 250px;
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: bolder;
      font-size: 30px;
      line-height: 47px;
      color: white;
    }
    .text2 {
      position: absolute;
      width: 300px;
      height: 15px;
      left: 90px;
      top: 290px;
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-size: 14px;
      line-height: 23px;
      color: white;
    }
  }
`;
export default Middle;
