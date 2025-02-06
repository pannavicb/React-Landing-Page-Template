import React from "react";
import 'font-awesome/css/font-awesome.min.css';

export const Navigation = (props) => {

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            ICITEE 2025
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"         
        >
          <ul className="nav navbar-nav navbar-right" >
            <li>
              <a href="#features" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Submission
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Program
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Committees
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Venue
              </a>
            </li>
            <li>
              <a href="#team1" className="page-scroll">
                Registration
              </a>
            </li>
            <li>
               <a href="mailto:icitee2025@it.kmitl.ac.th" className="email-link">
                <i className="fa-solid fa-envelope"></i> icitee2025@it.kmitl.ac.th
              </a>
              <a href="#contact" className="page-scroll">
                
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
