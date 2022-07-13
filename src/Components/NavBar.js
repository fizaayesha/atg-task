import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import logo from "../Assets/atglogo.png";
import { ArrowDropDown } from "@material-ui/icons";
function NavBar() {
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
            <p>
              Create Account.{" "}
              <sub>
                <span>
                  It's free
                  <ArrowDropDown />
                </span>
              </sub>
            </p>
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
        svg {
          margin-right: 15px;
          color: black;
          font-size: 1.6rem;
          cursor: pointer;
          @media screen and (max-width: 596px) {
            margin-right: 10px;
            font-size: 1.2rem;
          }
        }
        img {
          width: 1.2rem;
          cursor: pointer;
          margin-right: 15px;
          height: 1.2rem;
          border-radius: 50%;
          border: 2px solid grey;
          @media screen and (max-width: 596px) {
            margin-right: 10px;
            width: 1.2rem;
            height: 1.2rem;
          }
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
export default NavBar;
