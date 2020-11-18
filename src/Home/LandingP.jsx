import React, { Fragment } from "react";
import "./style.css";
import Video from "./video.mp4";
import Logo from "./Growing.png";
import Farmer from "./farmer.jpg";
import Farmer2 from "./farmer2.jpg";

const LandingP = () => {
  return (
    <Fragment>
      <div className="video-container">
        <video autoPlay={true} muted={true} loop={true} className="video">
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <div className="overlay-page" id="overlay-page"></div>

      <div className="home scrollspy" id="home">
        <div className="bg-overlay">
          <div className="container">
            <div className="row center-align title">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
            </div>
            <div className="row center-align title-info">
              <div className="logo-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, possimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="information scrollspy" id="information">
        <div className="row center-align">
          <h1 className="about-title">About Us</h1>
        </div>
        <div className="row center-align">
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut
            corporis ea libero veniam aut sit impedit quibusdam ullam suscipit
            eius, eveniet aliquid cupiditate nostrum? Provident illum fuga
            tenetur eveniet tempore minima minus vel? Vitae quis non,
            repudiandae vel facere laboriosam beatae quo, eos odit voluptates,
            neque maxime debitis dignissimos?
          </p>
        </div>
      </div>
      <div className="row container farmer scrollspy" id="farmer">
        <div className="overlay-farmer"></div>
        <img src={Farmer} alt="" />
      </div>
      <div className="row scrollspy" id="qualities">
        <div className="container">
          <p className="farmer-text center-align">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            est, non nemo quo quasi quis amet quas architecto inventore at qui
            debitis quam.
          </p>
        </div>
        <div className="row qualities">
          <div className="col s12 m12 l2 box-3">
            <div className="overlay-box-3"></div>
            <img src={Farmer2} alt="" />
          </div>
          <div className="col m12 l7 qualities-text">
            <p className="qualities-title">Lorem ipsum dolor.</p>
            <p className="qualities-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              provident laudantium fuga similique voluptas quis, ipsa atque
              laboriosam perspiciatis hic cumque labore esse a tempore iure
              officiis! Pariatur aut deleniti quasi nulla necessitatibus
              impedit, excepturi beatae ab eligendi repudiandae provident
              expedita nesciunt quas nam in. Dolorem nihil autem similique
              impedit.
            </p>
          </div>
        </div>
      </div>

      <div className="row footer center-align">
        <div className="overlay-footer"></div>
        <div className="footer-info">
          <p>©Copyright Growing. All Rights Reserved 2020.</p>
          <p>Designed by UAC-Dream Team</p>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingP;
