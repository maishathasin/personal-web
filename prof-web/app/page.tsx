"use client"

import '@sakun/system.css';
import React,{ useState }  from 'react';

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
      <div className="window" style={{ width: '30rem' }}>
        <div className="title-bar">
          <button aria-label="Close" className="close font-bold text-black-300" ></button>
          <h1 className="title font-bold" style={{ color: 'black' }}>System.css</h1>
          <button aria-label="Resize" className="resize"></button>
        </div>
        <div className="separator"></div>

        <div className="window-pane text-purple-300" style={{ color: 'black' }}>Hello world!</div> {/* This is where "Hello world!" will appear */}
      </div>

      <div className="window" style={{ width: '30rem' }}>
        <div className="title-bar">
          <button aria-label="Close" className="close"></button>
          <h1 className="title" style={{ color: 'black' }}>Search</h1>
          <button aria-label="Resize" disabled className="hidden"></button>
        </div>
        <div className="separator"></div>

        <div className="modeless-dialog">
          <section className="field-row" style={{ justifyContent: 'flex-start' }}>
            <label htmlFor="text_find" className="modeless-text" style={{ color: 'black' }}>
              Find:
            </label>
            <input id="text_find" type="text" style={{ width: '100%' }} placeholder="" />
          </section>
          <section className="field-row" style={{ justifyContent: 'flex-end' }}>
            <button className="btn">Cancel</button>
            <button className="btn" style={{ width: '95px' }}>
              Find
            </button>
          </section>
        </div>
      </div>
    </body>
  </html>
    )
  }

