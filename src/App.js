import React from "react";
import { HashLink } from "react-router-hash-link";
import "./App.css";
import Test from "./components/Test";
import { intro } from "./assets/content/intro";
import { sketches } from './assets/content/sketches'
import { lofi } from "./assets/content/lofi"; 
import { crit } from "./assets/content/crit";
import { hifi } from "./assets/content/hifi"; 
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
            <HashLink smooth to="/#intro">
              - Introduction
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#sketches">
              - Sketches
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#lo-fi">
              - Lo-Fi
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#crit">
              - Feedback
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#hi-fi">
              - Hi-Fi
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#testing">
              - User Testing
            </HashLink>
          </div>
        </div>
      </div>
      <div className="content">
        <div id="intro">
          <ImageCaption title={intro.title} content={intro.content} img={intro.img}/>
        </div>
        <div id="sketches">
          <ButtonToggle options={sketches.options} title={sketches.title} subtitle={sketches.subtitle}/>
        </div>
        <div id="lo-fi">
        <ButtonToggle options={lofi.options} title={lofi.title} subtitle={lofi.subtitle}/>
        </div>
        <div id="crit">
        <ButtonToggle options={crit.options} title={crit.title} subtitle={crit.subtitle}/>
        </div>
        <div id="hi-fi">
        <ButtonToggle options={hifi.options} title={hifi.title} subtitle={hifi.subtitle}/>
        </div>
        <div id="testing">
          <Test />
        </div>
      </div>
    </div>
  );
}

export default App;
