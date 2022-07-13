import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import logo from "../Assets/atglogo.png";
import profile from "../Assets/atgpro.jfif";
function NavLogin() {
  return (
    <NavBarStyled>
      <div className="topbar">
        <div className="left">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="middle">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="Search for your favourite groups in ATG"
            className="searchBar"
          />
        </div>
        <div className="right">
          <div className="icons">
            <img src={profile} alt="" className="profile" />
            Ayesha Khan
          </div>
        </div>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  .topbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.8rem;
    background-color: rgb(255, 255, 255);
    border: 1px solid #efefef;
    position: fixed;
    .left {
      font-size: 1.9rem;
      margin-right: 20%;
      font-weight: bolder;
      @media (max-width: 790px) and (min-width: 595px) {
        margin-right: 4%;
      }
      @media screen and (max-width: 596px) {
        font-size: 1.2rem;
      }
      .logo {
        margin-left: 10px;
        height: 40px;
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }
    .middle {
      padding: 4px;
      height: 42px;
      width: 320px;
      background-color: #f2f2f2;
      display: flex;
      align-items: center;
      border-radius: 21px;
      @media screen and (max-width: 596px) {
        display: none;
      }
      svg {
        color: grey;
        cursor: pointer;
      }
      .searchBar {
        font-size: 14px;
        border-radius: 21px;
        padding: 0.2rem;
        height: 42px;
        width: 300px;
        background-color: #f2f2f2;
        outline: none;
        border: none;
      }
    }
    .right {
      margin-left: 13.5%;
      @media screen and (max-width: 790px) {
        margin-left: 4%;
      }
      @media screen and (max-width: 596px) {
        margin-left: 2%;
      }

      .icons {
        display: flex;
        align-items: center;
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        margin-right: 3rem;

        img {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          object-fit: cover;
        }
        .defineColor {
          display: grid;
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
          h5 {
            color: black;
            position: absolute;
            margin-left: 1.8rem;
          }
        }
        p {
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 15px;
          span {
            color: #5687e9;
            font-size: 16px;
            margin-top: 5px;
          }
        }
      }
    }
  }
`;
export default NavLogin;
