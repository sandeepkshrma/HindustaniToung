import logo from './logo.svg';
import logo2 from './hindustani.jpg';
import logo3 from './hindustanitext.jpg';
import logo4 from './hindubackground.jpg';
import logo5 from './image1.jpg';
import logo6 from './image4.jpg';
import logo7 from './image3.jpg';
import logo8 from './image5.webp';
import avtar from './nirazavtar.png';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import myaudio from './myaudio.mp3';
import React, { useEffect } from 'react';
import Audioplayer from './Audioplayer';
import { Link } from 'react-router-dom';

function playsound() {
  const audio = new Audio(myaudio);
    audio.play();
}

function About() {
  return (
    <div className="App">
      <Audioplayer />
      <div className="image-fader">
  <img src={logo4} />
  <img src={logo5} />
  <img src={logo6} />
  <img src={logo7} />
</div>
      <header className="App-header">
        <div className='container m-0'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light app-navbar">
        <img src={logo2} className="App-logo" alt="logo" />
        <img src={logo3} className="App-logo3" alt="logo" />
        <div className='col-4'></div>
        <div className='App-menu-bar'>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <Link to="/" className='nav-item ml-2'><li>Home</li></Link>
      <Link to="/about" className='nav-item ml-2'><li>About</li></Link>
      <Link to="/contact" className='nav-item ml-2'><li>Contact</li></Link>
      <li className="nav-item ml-2 dropdown">
        <a className="nav-link p-0 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Languages
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>
      </header>
      <div className='App-body container'>
        <div className='left-section col-5'>
        About Page
        </div>
        </div>
        </div>
  );
}

export default About;
