import React from "react";
import "../styles/SectionBlock.css";

export default function ImageCaption(props) {
  return (
    <div className="imageCaption">
      <div className="section-title">{props.title}</div>
      <div className={!props.reverse ? "section-body" : "section-body reverse"}>
          {props.content ? (
            <div className="image-caption-content">{props.content}</div>
          ) : (
            <div className="section-content">
              <div className="section-subtitle">{props.leftSubtitle}</div>
              <div className="section-text">{props.leftText}</div>
            </div>
          )}
        <div>
          <hr />
        </div>
        <div className="section-image">
          <img src={props.img.src} alt={props.img.alt} id={props.img.id} />
        </div>
      </div>
    </div>
  );
}
