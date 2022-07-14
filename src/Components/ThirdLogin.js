import React from "react";
import styled from "styled-components";
import { ArrowDropDown } from "@material-ui/icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
function ThirdLogin() {
  return (
    <ThirdStyled>
      <div className="topbar">
        <div className="left">
          <ul>
            <li className="posts">Posts</li>
            <li>Article</li>
            <li>Event</li>
            <li>Education</li>
            <li>Job</li>
          </ul>
        </div>
        <div className="right">
          <div className="buttons">
            <button className="button1">
              Write a Post <ArrowDropDown />
            </button>
            <Link to="/">
              <button className="button2">
                <ExitToAppIcon /> Leave Group
              </button>
            </Link>
          </div>
        </div>
      </div>
    </ThirdStyled>
  );
}

const ThirdStyled = styled.div`
  .topbar {
    width: 77%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 4em;
    column-gap: 27rem;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid #e0e0e0;
    margin-top: 50px;
    .left {
      font-size: 1.9rem;
      font-weight: bolder;
      /* @media (max-width: 790px) and (min-width: 595px) {
        margin-right: 4%;
      }
      @media screen and (max-width: 596px) {
        font-size: 1.2rem;
      } */
      ul {
        /* left: 200px; */
        margin-top: 22px;
        display: inline-flex;
        li {
          font-family: "IBM Plex Sans";
          font-style: normal;
          font-weight: bolder;
          font-size: 16px;
          color: #8a8a8a;
          list-style: none;
          padding: 10px;
          margin-right: 10px;
        }
        .posts {
          border-bottom: 1px solid black;
          color: black;
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
          background: #ffffff;
          border-radius: 4px;
          font-size: 12px;
          color: white;
          font-weight: bold;
          border: 1px solid #989899;
          color: #989899;
        }
      }
    }
  }
`;
export default ThirdLogin;
