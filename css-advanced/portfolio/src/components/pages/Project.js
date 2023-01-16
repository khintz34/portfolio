import React, { useEffect, useRef, useState } from "react";
import "../../styles/Projects.css";

//todo on touch start touch end etc for mobile video plays
// todo video playing in new screen on mobile

function Project(props) {
  const [videoStatus, setVideoStatus] = useState(false);

  const videoRef = useRef(null);

  const [videoStyle, setVideoStyle] = useState("hideVideo");
  const [imageStyle, setImageStyle] = useState("showVideo");

  useEffect(() => {
    if (videoStatus) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [videoStatus]);

  const goToURL = () => {
    window.open(props.live);
  };

  const openGitURL = () => {
    window.open(props.github);
  };

  const playVideo = (e) => {
    setVideoStatus(true);
    setVideoStyle("showVideo");
    setImageStyle("hideVideo");
  };

  const pauseVideo = (e) => {
    setVideoStatus(false);
    setVideoStyle("hideVideo");
    setImageStyle("showVideo");
  };

  const decideVideo = (e) => {
    if (videoStatus) {
      setVideoStatus(false);
      setVideoStyle("hideVideo");
      setImageStyle("showVideo");
    } else {
      setVideoStatus(false);
      setVideoStyle("hideVideo");
      setImageStyle("showVideo");
    }
  };

  return (
    <div id="projectContainer">
      <div
        id="projectMain"
        onMouseOver={(e) => playVideo(e)}
        onMouseOut={(e) => pauseVideo(e)}
      >
        <h1 className="projectName">{props.name}</h1>
        <div className="projectImageContainer">
          <img
            src={props.image}
            alt="imageTag"
            className={`projectPic ${imageStyle}`}
          ></img>
          <video
            className={`projectPic ${videoStyle}`}
            poster={props.image}
            onMouseOver={(e) => playVideo(e)}
            onMouseOut={(e) => pauseVideo(e)}
            onFocus={(e) => playVideo(e)}
            onTouchStart={(e) => playVideo(e)}
            src={props.video}
            ref={videoRef}
            muted="muted"
          ></video>
        </div>
        <div className="projectPara">
          <p>{props.para}</p>
          <p className="clickToSee">Click on image to see a live demo</p>
        </div>
        <div className="projectLinksContainer">
          <button className="codeBtn" onClick={goToURL}>
            Live Code
          </button>
          <button className="codeBtn" onClick={openGitURL}>
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
