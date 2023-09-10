"use client"

import '@sakun/system.css';
import React,{ useState,useEffect }  from 'react';
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



    useEffect(() => {
      // Add your new TypeScript functions here
  
      document.addEventListener("DOMContentLoaded", () => {
        const draggableElements = document.querySelectorAll(".draggable");
  
        draggableElements.forEach((element: Element) => {
          const div = element as HTMLElement; // Type assertion to HTMLElement
          div.addEventListener("mousedown", onMouseDown);
        });
    
  
        let offsetX: number, offsetY: number;
        let draggedElement: HTMLElement | null = null;
  
        function onMouseDown(e: MouseEvent) {
          if (
            e.target instanceof HTMLElement &&
            e.target.classList.contains("header")
          ) {
            draggedElement = e.currentTarget as HTMLElement;
            const rect = draggedElement.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            draggedElement.classList.add("dragging");
            bringToFront(draggedElement);
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
          }
        }
  
        function onMouseMove(e: MouseEvent) {
          if (draggedElement) {
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;
            draggedElement.style.left = `${newX}px`;
            draggedElement.style.top = `${newY}px`;
          }
        }
  
        function onMouseUp() {
          if (draggedElement) {
            draggedElement.classList.remove("dragging");
            draggedElement = null;
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
          }
        }
  
        function bringToFront(element: HTMLElement) {
          const divs = document.querySelectorAll(".draggable");
          let highestZIndex = 0;
  
          divs.forEach((element: Element) => {
            const div = element as HTMLElement;
            const zIndex = parseInt(
              window.getComputedStyle(div).zIndex as string,
              10
            );
            if (!isNaN(zIndex) && zIndex > highestZIndex) {
              highestZIndex = zIndex;
            }
          });
  
          element.style.zIndex = (highestZIndex + 1).toString();
        }
      });
  
      function toggleDropUp() {
        const dropUpContent = document.getElementById("dropUpContent");
        if (dropUpContent) {
          dropUpContent.classList.toggle("show");
        }
      }
  

  
      function openTab(divNumber: number) {
        const divToOpen = document.getElementById("div" + divNumber);
        if (divToOpen) {
          divToOpen.style.display = "block";
        }
        const tabToOpen = document.getElementById("tab" + divNumber);
        if (tabToOpen) {
          tabToOpen.style.display = "inline-block";
        }
      }
  
      function closeTab(divNumber: number) {
        const divToClose = document.getElementById("div" + divNumber);
        if (divToClose) {
          divToClose.style.display = "none";
        }
        const tabToClose = document.getElementById("tab" + divNumber);
        if (tabToClose) {
          tabToClose.style.display = "none";
        }
      }
  
      function loadFrame(elm: HTMLElement) {
        const frame1 = document.getElementById("frame2") as HTMLIFrameElement;
        if (frame1) {
          frame1.src = elm.dataset.src || "";
        }
      }
  
      const iconButtons = document.querySelectorAll(".opennew");
  
      // Add a click event listener to each icon button
      iconButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const targetURL = button.getAttribute("data-target");
          if (targetURL) {
            window.location.href = targetURL;
          }
        });
      });
  
      function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        const timeString = `${hours}:${minutes}:${seconds}`;
  
        const clockElement = document.getElementById("clock");
        if (clockElement) {
          clockElement.textContent = timeString;
        }
      }
  
      setInterval(updateTime, 1000); // Update every 1000ms (1 second)
      updateTime(); // Initial call to set the time immediately
  
      const toggleButton = document.getElementById("toggleButton");
      const images = document.querySelectorAll(".toggle-image");
  
      let imagesVisible = false;
  
     
    }, []);


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

