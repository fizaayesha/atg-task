import React from "react";
import styled from "styled-components";
import { ArrowDropDown } from "@material-ui/icons";
import GroupIcon from "@material-ui/icons/Group";
import { Link } from "react-router-dom";
function Third() {
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
                <GroupIcon /> Leave Group
              </button>
            </Link>
          </div>
        </div>
        <div className="main">
          <div className="posts23">Posts(343)</div>
          <div className="filter"></div>
          <button>
            Filter All
            <ArrowDropDown />{" "}
          </button>
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
    column-gap: 24rem;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid #e0e0e0;
    margin-top: 4rem;
    @media screen and (max-width: 1200px) {
      column-gap: 12rem;
    }
    .left {
      font-size: 1.9rem;
      font-weight: bolder;
      ul {
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
      @media screen and (max-width: 800px) {
        display: none;
      }
    }
    .right {
      margin-left: -2rem;
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
          width: 7rem;
          height: 2rem;
        }
        .button2 {
          border: none;
          width: 7rem;
          height: 2rem;
          outline: none;
          background: white;
          border-radius: 4px;
          font-size: 12px;
          color: #808080;
          font-weight: bold;
          border: 1px solid #808080;
        }
      }
      @media screen and (max-width: 800px) {
        display: none;
      }
    }
    .main {
      display: inline-flex;
      column-gap: 10rem;

      @media screen and (max-width: 620px) {
        column-gap: 6rem;
      }
      @media screen and (max-width: 455px) {
        column-gap: 3rem;
      }
      .posts23 {
      }
      button {
        color: black;
        outline: none;
        border: none;
        border-radius: 4px;
        padding: 4px;
        background-color: #f1f3f5;
        font-size: 15px;
      }
      @media screen and (min-width: 801px) {
        display: none;
      }
    }
  }
`;
export default Third;
