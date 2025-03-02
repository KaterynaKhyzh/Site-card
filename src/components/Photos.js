import React from 'react';
import '../App.css';

import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';

function Photos() {
  const photos = [photo1, photo2, photo3];
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <section className="photos">
      <div className="photo-wrapper">
        {duplicatedPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`Фото ${index + 1}`} className="photo-item" />
        ))}
      </div>
    </section>
  );
}

export default Photos;
