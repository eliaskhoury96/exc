import React, { useState } from 'react';

function App() {
  const [images] = useState([
    "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
  ]);
  const [currentImg, setCurrentImg] = useState(0);


  const shiftImageBack = () => {
    setCurrentImg(prev => (prev > 0 ? prev - 1 : 0));
  };


  const shiftImageForward = () => {
    setCurrentImg(prev => (prev < images.length - 1 ? prev + 1 : prev));
  };

  return (
    <div>
      <button className="back" onClick={shiftImageBack}>Back</button>
      <button className="forward" onClick={shiftImageForward}>Forward</button>
      <img src={images[currentImg]} alt="Gallery" />
    </div>
  );
}

export default App;

