import { Facebook } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import svg from "../Assets/13038.jpg";
import { Link } from "react-router-dom";
function Login() {
  return (
    <LoginStyled>
      <div className="header">
        <p>
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </p>
      </div>
      <div className="sign">Sign In</div>
      <div className="mid">
        Do you have account?
        <Link to="/register">
          <span style={{ color: "blue" }}>Create new for free?</span>{" "}
        </Link>
      </div>
      <div className="fill">
        <input type="text" className="name" placeholder="Enter your name" />
        <input type="text" className="name" placeholder="Enter yout password" />
        <button>Submit</button>
      </div>
      <div className="fill1">
        <button className="name1">
          <Facebook htmlColor="blue" /> Sign In with facebook{" "}
        </button>
        <button className="name1">
          <GTranslateIcon htmlColor="red" /> Sign In with Google{" "}
        </button>
        <button className="name2">Forgot Password?</button>
      </div>
      <div className="svg">
        <img src={svg} alt="" className="svgg" />
      </div>
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  width: 50%;
  padding-bottom: 10px;
  left: 25%;
  position: fixed;
  background-color: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  top: 20%;
  position: fixed;
  font-family: "IBM Plex Sans";
  font-style: normal;
  .header {
    position: absolute;
    width: 100%;
    height: 40px;
    background: #effff4;
    border-radius: 8px 8px 0px 0px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #008a45;
    p {
      margin-top: 10px;
    }
  }
  .sign {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #000000;
    margin-top: 3rem;
    margin-left: -32rem;
  }
  .mid {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 17px;
    text-align: right;
    color: #3d3d3d;
    margin-top: -1.5rem;
    margin-right: 2rem;
  }
  .fill {
    margin-top: 2rem;
    .name {
      box-sizing: border-box;
      width: 270px;
      height: 30px;
      background: #f7f8fa;
      border: 1px solid #d9d9db;
      border-radius: 2px 2px 0px 0px;
      margin-right: 20rem;
      outline: none;
      border: none;
      border: 1px solid #d9d9db;
      @media screen and (max-width: 800px) {
        width: 140px;
        height: 20px;
      }
    }
    button {
      position: absolute;
      width: 275px;
      height: 40px;
      background: #2f6ce5;
      border-radius: 20px;
      margin: 2rem;
      margin-left: -37rem;
      margin-top: 39px;
      border: none;
      outline: none;
      @media screen and (max-width: 800px) {
        width: 140px;
        height: 20px;
        margin-left: -7rem;
        margin-top: 9px;
      }
    }
  }
  .fill1 {
    margin-top: 4rem;
    .name1 {
      box-sizing: border-box;
      width: 270px;
      height: 30px;
      background: #ffffff;
      border-radius: 2px 2px 0px 0px;
      margin-right: 20rem;
      outline: none;
      border: none;
      border: 1px solid #d9d9db;
      margin-top: 10px;
    }
    .name2 {
      box-sizing: border-box;
      width: 270px;
      height: 30px;
      background: #ffffff;
      border-radius: 2px 2px 0px 0px;
      margin-right: 20rem;
      outline: none;
      border: none;
      margin-top: 10px;
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .svg {
    .svgg {
      height: 34vh;
      margin-top: -20rem;
      margin-left: 20rem;
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;
export default Login;
