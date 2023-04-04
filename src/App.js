import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './pages/Video';
import db from './config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight;
  }

  const [video, setVideos] = useState([])

  async function getVideos(){
    const videosCollection = collection(db, "Videos")
    const videosSnapshot = await getDocs(videosCollection) //assincrono
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videosList)
  }

  useEffect(()=>{

    getVideos();

  },[])

  return (
    <div className="App" style={{maxHeight: maxHeight + "px"}}>
      <div className='app_videos'>
        { video.map((item)=>{
          return (
            <Video 
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        }) }
        
        {/* <Video 
          likes={300}
          messages={600}
          shares={900}
          name="Gabriel"
          description="Gato goleiro"
          music="Musica épica"
          url='https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946'
        /> */}
        {/* <Video 
          likes={300}
          messages={600}
          shares={900}
          name="Gabriel Teles"
          description="Gabriel meu amorzin"
          music="Love Love"
          url='https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946'
        /> */}
        {/* <Video 
          likes={300}
          messages={600}
          shares={900}
          name="Gabriel Medeiros"
          description="Gabriel Gato"
          music="Musica épica"
          url='https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946'
        /> */}

      </div>
    </div>
  );
}

export default App;