import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import "./posts.css";
import image3 from "../Assets/atgcar.jfif";
import image2 from "../Assets/atgshut.avif";
import image1 from "../Assets/atgforest.jfif";
import profile from "../Assets/atgpro.jfif";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PanToolIcon from "@material-ui/icons/PanTool";
import ShareIcon from "@material-ui/icons/Share";
import CalendarTodaySharpIcon from "@material-ui/icons/CalendarTodaySharp";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import WorkOutlinedIcon from "@material-ui/icons/WorkOutlined";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
function Photos() {
  return (
    <div className="blog">
      <div className="blogList">
        <div className="blogItem">
          <div className="img">
            <img src={image1} alt="" className="inimg" />
          </div>
          <div className="content">
            <div className="type">
              <PanToolIcon htmlColor="#ffbb33" className="hands" />
              Article
            </div>
            <div className="second">
              <div className="heading">
                What is the famous brand have regulaer fonts? Meet aRegulaBrand!
              </div>
              <div className="icon">
                <Dropdown className="drop">
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{ backgroundColor: "white", marginTop: "-15px" }}
                  >
                    <MoreHorizIcon htmlColor="black" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, praesentium.
              </p>
            </div>{" "}
            <div className="second2">
              <div className="heading2">
                <img src={profile} alt="" className="profile" />
                <p>Ayesha Khan</p>
              </div>
              <div className="icon">
                <button>
                  {" "}
                  <VisibilityOutlinedIcon /> 1.4k views
                </button>
                <ShareIcon className="share" />
              </div>
            </div>
          </div>
        </div>

        <div className="blogItem">
          <div className="img">
            <img src={image2} alt="" className="inimg" />
          </div>
          <div className="content">
            <div className="type">
              <CastForEducationIcon htmlColor="skyblue" className="hands" />
              Education
            </div>
            <div className="second">
              <div className="heading">
                What is the famous brand have regulaer fonts? Meet aRegulaBrand!
              </div>
              <div className="icon">
                <Dropdown className="drop">
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{ backgroundColor: "white", marginTop: "-15px" }}
                  >
                    <MoreHorizIcon htmlColor="black" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, praesentium.
              </p>
            </div>{" "}
            <div className="second2">
              <div className="heading2">
                <img src={profile} alt="" className="profile" />
                <p>Ayesha Khan</p>
              </div>
              <div className="icon">
                <button>
                  {" "}
                  <VisibilityOutlinedIcon /> 1.4k views
                </button>
                <ShareIcon className="share" />
              </div>
            </div>
          </div>
        </div>

        <div className="blogItem">
          <div className="img">
            <img src={image3} alt="" className="inimg" />
          </div>
          <div className="content">
            <div className="type">
              <MeetingRoomIcon htmlColor="#fff179" className="hands" />
              Meeting
            </div>
            <div className="second">
              <div className="heading">
                What is the famous brand have regulaer fonts? Meet aRegulaBrand!
              </div>
              <div className="icon">
                <Dropdown className="drop">
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{ backgroundColor: "white", marginTop: "-15px" }}
                  >
                    <MoreHorizIcon htmlColor="black" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="desc">
              <div className="desc1">
                <div>
                  <CalendarTodaySharpIcon className="iconn" />
                  Fri, 12 Oct, 2018
                </div>
                <div>
                  <LocationOnOutlinedIcon className="iconn" /> AhemedaBad, India
                </div>
              </div>
              <button className="desc2">Visit Website</button>
            </div>{" "}
            <div className="second2">
              <div className="heading2">
                <img src={profile} alt="" className="profile" />
                <p>Ayesha Khan</p>
              </div>
              <div className="icon">
                <button>
                  {" "}
                  <VisibilityOutlinedIcon /> 1.4k views
                </button>
                <ShareIcon className="share" />
              </div>
            </div>
          </div>
        </div>

        <div className="blogItem">
          <div className="content">
            <div className="type">
              <WorkOutlinedIcon htmlColor="brown" className="hands" />
              Job
            </div>
            <div className="second">
              <div className="heading">
                What is the famous brand have regulaer fonts? Meet aRegulaBrand!
              </div>
              <div className="icon">
                <Dropdown className="drop">
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{ backgroundColor: "white", marginTop: "-15px" }}
                  >
                    <MoreHorizIcon htmlColor="black" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="desc">
              <div className="desc1">
                <div>
                  <CalendarTodaySharpIcon className="iconn" />
                  Innovaccer Analytics Private Ltd.
                </div>
                <div>
                  <LocationOnOutlinedIcon className="iconn" /> AhemedaBad, India
                </div>
              </div>
              <button className="desc2" style={{color:"#02B875"}}>Apply on TimesJobs</button>
            </div>{" "}
            <div className="second2">
              <div className="heading2">
                <img src={profile} alt="" className="profile" />
                <p>Ayesha Khan</p>
              </div>
              <div className="icon">
                <button>
                  <VisibilityOutlinedIcon /> 1.4k views
                </button>
                <ShareIcon className="share" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
