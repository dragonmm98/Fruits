// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react'
import './index'
import './index.css'
import ReactDOM from 'react-dom/client'
import Navbar from './footer'
import downloads from './assets/kiwi.jfif'
import apple from './assets/apple.jfif'
import ap from './assets/apricot.jfif'
import av from './assets/avocado.jfif'
import blu from './assets/bluberry.jfif'
import cherry from './assets/cherry.jfif'
import blackberry from './assets/blackberry.jfif'
import lime from './assets/lime.jfif'
import mango from './assets/mango.jfif'
import orange from './assets/orange.jfif'
import pineapple from './assets/pineapple.jfif'
import plum from './assets/plum.jfif'
import water from './assets/watermelon.jfif'

const root = ReactDOM.createRoot(document.getElementById('root'));
  const data = [
    {name:'apple', image: apple},
    {name:'apricot', image: ap},
    {name:'avocado', image: av},
    {name:'bluberry', image: blu},
    {name:'cherry', image: cherry},
    {name:'blackberry', image: blackberry}, 
    {name:'lime', image: lime}, 
    {name:'orange', image: orange},
    {name:'pineapple', image: pineapple}, 
    {name:'plum', image: plum},
    {name:'mango', image: mango}, 
    {name:'watermelon', image: water},
    {name:'kiwi', image: downloads}, 



  ]


root.render (
  <React.StrictMode>
    <div className='container'>
  {
    data.map ((value) => {
      return (
        <Navbar title= {value} />
      )
    })
  }
  </div>
  </React.StrictMode>
);
