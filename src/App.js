import "./App.css";
import React from "react";
import { HashLink } from "react-router-hash-link";
import { intro } from "./assets/content/intro";
import { sketches } from './assets/content/sketches'
import { lofi } from "./assets/content/lofi"; 
import { crit, crit1 } from "./assets/content/crit";
import { hifi } from "./assets/content/hifi"; 
import { taskQuestions, testingVideos, analysis } from "./assets/content/testing";
import ImageCaption from "./components/ImageCaption";
import ButtonToggle from "./components/ImageToggle";
import VideoToggle from "./components/VideoToggle";
import DividedText from "./components/DividedText";

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
              - Group Critique
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
        <div className="section-title">Group Critique</div>
          <div className="section-subtitle">The HiFi prototype shown above is after we implemented changes from crit feedback, so to show our iteration, we’ve included updated versions of our low fidelity prototypes below (and when not applicable, we have our HiFi). In the LoFi Prototype section above, we have the first draft before feedback.</div>
        <ImageCaption img={crit1.img} leftSubtitle={crit1.leftSubtitle} leftText={crit1.leftText}/>
        </div>
        <div id="hi-fi">
        <VideoToggle options={hifi.options} title={hifi.title} subtitle={hifi.subtitle}/>
        </div>
        <div id="testing">
          <div className="section-title">User testing</div>
          <div className="section-text">Our interface’s intended functionality is first and foremost to allow our users to match and message with others as well as unmatch. Our testing instructions were as follows: "Imagine you’re a woman seeking both men and women on a brand new dating app. Create a profile and try to match with both users that are available to match with. Think aloud as you go through the app, especially when you find something confusing."</div>
          <DividedText content={taskQuestions.content}/>
          <br></br><br></br>
          <div className="section-subtitle">Most of the results were in line with our expectations. All subtasks were successfully done, but there were some confusions. Click the buttons to view each user’s videos.</div>
          <VideoToggle options={testingVideos.user1} title={testingVideos.user2} subtitle={testingVideos.user3}/>
          <DividedText content={analysis.content}/>
        </div>
      </div>
    </div>
  );
}

export default App;
