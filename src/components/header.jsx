import React from "react";
import CountDownTimer from '../components/CountDownTimer';

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text ">
                <h1 className=".conference-title">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p class="conference-title">{props.data ? props.data.paragraph : "Loading"}</p>
                <div class="conference-timer">The Conference starts in</div>   
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  20-22 October 2025 | Bangkok, Thailand.
                </a>{" "}        
                
                <div><CountDownTimer /></div>     
              </div>             
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
