import React, { useRef, useState }from 'react';
import VideoFooter  from './componentes/footer/VideoFooter';
import Videosidebar from "./componentes/footer/sidebar/Videosidebar";
import "./video.css";

function Video({likes, messages, shares, name, description, music, url}) {

  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

    function handdleStart(){
      if(play){
        videoRef.current.play();
        setPlay(false);
      } else {
        videoRef.current.pause();
        setPlay(true);     
      }
    }
  
  return (
    <div className='video'>
      <video 
          className='video_player'
          ref={videoRef}
          onClick={handdleStart}
          loop
          src= {url}
>
      </video>
      <Videosidebar
        likes={likes}
        messages={messages}
        shares={shares}
        src= {url}
      />
      <VideoFooter
      name={name}
      description={description}
      music={music}
      src= {url}
      />
    </div>
  );
}

export default Video