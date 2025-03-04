import React from 'react';
import '../App.css';

function WelcomeScreen({ onClick, fadeOut }) {
  return (
    <div
      className={`welcome-screen ${fadeOut ? 'fade-out' : ''}`}
      onClick={onClick}
    >
      <h1>Kateryna Khyzhniak</h1>
    </div>
  );
}

export default WelcomeScreen;
