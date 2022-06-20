import React, { Component } from 'react';
import "./About.css";
import p1 from "../assets/p1.JPG";
export default class About extends Component {
  render() {
    return (
      /*<div className = "name_title">
          <p>Title </p>
          <div>
          </div> 
      </div>
      */

      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {p1}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Evan Qin</div>
            <div className="brief_description">
            Hello, My name is Evan. I am a computer science major Junior at Texas A&M University. I have experience in C++ and Python from both courses that I have taken and a research that I participated in.
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}