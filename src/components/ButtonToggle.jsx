import React from "react";
import "../styles/ButtonToggle.css"

export default function ButtonToggle(props) {
  const [active, setActive] = React.useState(props.options[Object.keys(props.options)[0]])
  return (
    <div>
      <div className="section-title">{props.title}</div>
      <div className="section-subtitle">{props.subtitle}</div>
      <div className="button-menu">
        {Object.keys(props.options).map((elt) => {
          return (
            <div className="section-button" onClick={() => setActive(props.options[elt])}>
              {props.options[elt].title}
            </div>
          );
        })}
      </div>
      <div className="image-container">
        <div className="section-image">
          <img src={active.img} alt="" className={active.id} />
        </div>
        <div className="section-text">{active.text}</div>
      </div>
    </div>
  );
}
