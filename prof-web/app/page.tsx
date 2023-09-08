"use client"

import '@sakun/system.css';
import React,{ useState }  from 'react';
import home from '../public/personal_web_icons/Homeicon.png'
import intro from '../public/personal_web_icons/intro_icon.png'
import Image from "next/image";

export default function Home() {
    const [openWindows, setOpenWindows] = useState<{ id: number }[]>([]);
  
    const openWindow = () => {
      const newWindow = { id: Date.now() };
      setOpenWindows([...openWindows, newWindow]);
    };
  
    const closeWindow = (windowId: number) => {
      const updatedWindows = openWindows.filter((window) => window.id !== windowId);
      setOpenWindows(updatedWindows);
    };


    return (
  <html>
    <head>
      <title>System.css Starter</title>
      <meta charSet="UTF-8" />
    </head>
    <body>
    <div className="container">
      <div className="window " style={{ width: '80rem' , height: '50rem'}}>
        <div className="title-bar">
          <button aria-label="Close" className="close font-bold text-black-300" ></button>
          <h1 className="title font-bold" style={{ color: 'black' }}>Home</h1>
          <button aria-label="Resize" className="resize"></button>
        </div>
        <div className="separator"></div>

        <div className="window-pane text-purple-300" style={{ color: 'black' ,display: 'flex', gap: '20px'}}>
        
<div style={{ marginTop: '170px',marginLeft: "50px",display: 'flex'}}>

<div style={{ marginRight: '200px',justifyItems:'center'}}>
    <Image
      src={intro}
      alt={""}
      style={{ width: '100px', height: '60px' }}
    />
    <p style={{ marginTop: '10px' }}>Intro</p>
  </div>

  <div style={{ marginRight: '200px' ,justifyItems:'center'}}>
    <Image
      src={intro}
      alt={""}
      style={{ width: '100px', height: '60px' }}
    />
    <p style={{ marginTop: '10px' }}>Projects</p>
  </div>


  <div style={{ marginRight: '200px' }}>
    <Image
      src={intro}
      alt={""}
      style={{ width: '100px', height: '60px' }}
    />
    <p style={{ marginTop: '10px' }}>Guest Book</p>
  </div>


  <div style={{ marginRight: '200px' }}>
    <Image
      src={intro}
      alt={""}
      style={{ width: '100px', height: '60px' }}
    />
    <p style={{ marginTop: '10px' }}>Blog</p>
  </div>

</div>

                     



        
        
        
        </div> 
      </div>
      </div>

     
    </body>
  </html>
    )
  }

