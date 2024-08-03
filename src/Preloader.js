// import React from 'react'

// export default function Preloader(props) {
//   return (
//        <div id={props.load ? "preloader" : "preloader-none"}></div>
//   )
// }



import React from 'react';
import './Preloader.css';

export default function Preloader(props) {
  return (
    <div className={props.load ? "preloader" : "preloader-none"}>
      <div className="spinner"></div>
      <div className="welcome-message">Welcome to Vishnu's Portfolio</div>
    </div>
  );
}

