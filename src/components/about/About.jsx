import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card-bg"></div>
        <div className="a-card">
          <img
            src="https://www.amazonswatchmagazine.com/wp-content/uploads/2020/11/Art-and-Academia-Image.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub-title">
          It is a long estblished fact that a rander will be do readable
          content.
        </p>
        <p className="a-desc">
          Ten Exceptional Female Photographers Taking Center Stage in Africa -
          AmazonsPhotography services offered on Fiverr include portrait
          photography, events photography, real estate photography, food
          photography, and more. Beyond capturing
        </p>
        <div className="a-award">
          <img
            src="https://img.pikbest.com/origin/10/10/76/39rpIkbEsTNRW.jpg!w700wp"
            alt=""
            className="a-award-img
            "
          />
          <div className="a-award-desc">
            <h4 className="a-award-title">
              International Business Growth Award
            </h4>
            <div className="a-award-text">
              Business growth are improve by our self to fullfil our future
              goles
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
