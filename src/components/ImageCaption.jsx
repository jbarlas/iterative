import React from "react";
import "../styles/SectionBlock.css";

export default function ImageCaption(props) {
  return (
    <div>
      <div className="section-title">{props.title}</div>
      <div className="section-body">
        <div className="section-content">{props.content}</div>
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
