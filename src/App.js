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
import { createBrowserRouter, RouterProvider, Routes, Route, Link, Router } from "react-router-dom";
import MyAcount from './MyAcount';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';
import Navbar from './Navbar';

function playsound() {
  const audio = new Audio(myaudio);
    audio.play();
}

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <><Navbar/><Home /></>
    },
    {
      path : '/about',
      element : <><About /></>
    },
    {
      path : '/contact',
      element : <><Contact /></>
    },
    {
      path : '/user/:username',
      element : <><User /></>
    },
  ])
  return (
    <>
      <RouterProvider router = {router} />
    </>  
  
  );
}

export default App;
