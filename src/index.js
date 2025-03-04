import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Skills from './components/Skills';
import Photos from './components/Photos';
import Footer from './components/Footer';
import Interests from './components/Interests';
import WelcomeScreen from './components/WelcomeScreen'; 
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleWelcomeClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowMainContent(true); 
    }, 1000); 
  };

  return (
    <div>
      {showMainContent ? (
        <div className="main-content show">
          <Header />
          <Photos />
          <Skills />
          <Interests />
          <Footer />
        </div>
      ) : (
        <WelcomeScreen onClick={handleWelcomeClick} fadeOut={fadeOut} />
      )}
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

