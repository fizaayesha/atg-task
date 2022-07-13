import React from "react";
import styled from "styled-components";
import { ArrowDropDown } from "@material-ui/icons";
import GroupIcon from "@material-ui/icons/Group";
function Third() {
  return (
    <ThirdStyled>
      <div className="topbar">
        <div className="left">
          <ul>
            <li className="posts">Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <div className="right">
          <div className="buttons">
            <button className="button1">
              Write a Post <ArrowDropDown />
            </button>
            <button className="button2">
              <GroupIcon /> Join Group
            </button>
          </div>
        </div>
      </div>
    </ThirdStyled>
  );
}

const ThirdStyled = styled.div`
  .topbar {
    width: 77%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4em;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid #e0e0e0;
    margin-left: 150px;
    .left {
      font-size: 1.9rem;
      margin-right: 53%;
      font-weight: bolder;
      @media (max-width: 790px) and (min-width: 595px) {
        margin-right: 4%;
      }
      @media screen and (max-width: 596px) {
        font-size: 1.2rem;
      }
      ul {
        left: 200px;
        margin-top: 22px;
        display: inline-flex;
        li {
          font-family: "IBM Plex Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: black;
          list-style: none;
          padding: 10px;
        }
        .posts {
          border-bottom: 1px solid black;
        }
      }
    }
    .right {
      .buttons {
        margin-top: 15px;
        display: flex;
        padding: 2px;
        .button1 {
          border: none;
          outline: none;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
        }
        .button2 {
          border: none;
          outline: none;
          background: #2f6ce5;
          border-radius: 4px;
          font-size: 12px;
          color: white;
          font-weight: bold;
        }
      }
    }
  }
`;
export default Third;
