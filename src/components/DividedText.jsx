import React from "react";
import "../styles/SectionBlock.css";

export default function DividedText(props) {
    const content = props.content
  return (
    <div>
      <div className="section-title">{content.title}</div>
      <div className="section-subtitle">{content.subtitle}</div>
      <div className="section-body">
        <div className="section-content">
          <div className="section-subtitle">{content.rightSubtitle}</div>
          <div className="section-text">{content.rightText}</div>
        </div>
        <div>
          <hr />
        </div>
        <div className="section-content">
          <div className="section-subtitle">{content.leftSubtitle}</div>
          <div className="section-text">{content.leftText}</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
