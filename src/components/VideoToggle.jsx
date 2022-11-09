import React from "react";
import "../styles/VideoToggle.css";

export default function VideoToggle(props) {
  const [active, setActive] = React.useState(
    props.options[Object.keys(props.options)[0]]
  );

  const videoRef = React.useRef();

  React.useEffect(() => {    
    videoRef.current?.load();
  }, [active.video.src]);
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
      <div className="videos-display">
          <div className="video-container" >
            <video ref={videoRef} id={active.video.id} controls>
                <source src={active.video.src} type="video/mp4" />
                Oops! Your browser does not support this video type /:
            </video>
            <div className="section-caption">{active.video.caption}</div>
          </div>
      </div>
    </div>
  );
}
