import React, { useState } from 'react';
import './App.css';
import PictureGrid from './components/PictureGrid';

function App() {
  const [enlargedPicture, setEnlargedPicture] = useState(null);

  const handlePictureClick = (picture) => {
    setEnlargedPicture(enlargedPicture === picture ? null : picture);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <PictureGrid enlargedPicture={enlargedPicture} onPictureClick={handlePictureClick} />
    </div>
  );
}

export default App;
