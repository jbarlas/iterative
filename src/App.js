import React from "react";
import { HashLink } from "react-router-hash-link";
import "./App.css";
import Test from "./components/Test";
import { intro } from "./assets/content/intro";
import { test } from './assets/content/testButton'
import ImageCaption from "./components/ImageCaption";
import ButtonToggle from "./components/ButtonToggle";

function App() {
  return (
    <div className="app">
      <div className="sidenav-container">
        <div className="sidenav-title">
          <div>Iterative</div>
          <div>Design</div>
        </div>
        <div className="sidenav-options">
          <div className="sidenav-button">
            <HashLink smooth to="/#pt1">
              - Part 1
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#pt2">
              - Part 2
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#pt3">
              - Part 3
            </HashLink>
          </div>
        </div>
      </div>
      <div className="content">
        <div id="pt1">
          <ImageCaption title={intro.title} content={intro.content} img={intro.img}/>
        </div>
        <div id="pt2">
          <ButtonToggle options={test.options} title={test.title} subtitle={test.subtitle}/>
        </div>
        <div id="pt3">
          <Test />
        </div>
      </div>
    </div>
  );
}

export default App;
