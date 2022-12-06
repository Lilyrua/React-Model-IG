import React from 'react'
import "./App.css"
import HomePage from './file'
// import Aside from './Aside'

export default function App() {

  const profile = [
    {
      name: "Incognito1",
      image: "https://i0.wp.com/www.howtomob.com/wp-content/uploads/2022/07/whatsapp-dp-for-boys-.jpg?ssl=1&resize=512%2C512",
    },
    {
      name: "Incognito2",
      image: "https://cdn.discordapp.com/attachments/856511869631987722/1049310418260197376/green.jpg",
    },
    {
      name: "Incognito3",
      image: "https://cdn.discordapp.com/attachments/856511869631987722/1049310418553806910/yello.jpg",
    },
    {
      name: "Incognito4",
      image: "https://cdn.discordapp.com/attachments/856511869631987722/1049310418788683897/red.jpg",
    },
    {
      name: "Incognito5",
      image: "https://cdn.discordapp.com/attachments/856511869631987722/1049310419052920913/pink.jpg",
    },
  ]

  const datat = {
      like : Math.floor(Math.random()*100), 
      comment : Math.floor(Math.random()*100)
    }

  const picpost = [
    "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw=w240-h480-rw",
    "https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo",
    "https://play-lh.googleusercontent.com/PAPuQveK8eeVwh7M4vccotAFPOJI0sENMWxnFe9RDt-_63SfVRiLUNXcpJ-8iHuVng=w240-h480-rw",
    "https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/2826/2018/12/1_6kK9j74vyOmXYm1gN6ARhQ.png",
    "https://play-lh.googleusercontent.com/Ccj8KpZixnc4hJJjtRM6An33PcL0etqny29_nBKS_gHoy-GyYJ3c6IazLsq87Pt8Jelh",
    "https://i.redd.it/31b2ii8hchi31.jpg",
  ]

  const ran = {
      Pran:Math.floor(Math.random()*5),
      Picran:Math.floor(Math.random()*6)
    }
  
  
  return (
    <div className='App'>
      <div className="Homepage">
        <HomePage profile={profile} picpost={picpost} datat={datat} ran={ran} />
      </div>
    </div>
  );
  
 

}
