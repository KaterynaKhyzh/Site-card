import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Skills from './components/Skills';
import Photos from './components/Photos';
import Footer from './components/Footer';
import Interests from './components/Interests';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      <Photos />
      <Skills />
      <Interests /> 
      <Footer />
    </div>
  </React.StrictMode>
);