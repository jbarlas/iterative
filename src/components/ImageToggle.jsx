import React from "react";
import "../styles/ImageToggle.css";

export default function ButtonToggle(props) {
  const [active, setActive] = React.useState(
    props.options[Object.keys(props.options)[0]]
  );
  return (
    <div>
      <div className="section-title">{props.title}</div>
      <div className="section-subtitle">{props.subtitle}</div>
      <div className="button-menu">
        {Object.keys(props.options).map((elt) => {
          return (
            <div
              className="section-button"
              onClick={() => setActive(props.options[elt])}
            >
              {props.options[elt].buttonText}
            </div>
          );
        })}
      </div>
      <div className="images-display">
      {active.imgs.map((img) => {
        return (
          <div className="image-container">
            <div className="section-image">
              <img src={img.src} alt="" id={img.id} />
            </div>
            <div className="section-caption">{img.caption}</div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
