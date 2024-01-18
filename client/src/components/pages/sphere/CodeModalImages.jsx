import React, { useRef, useEffect } from 'react';
import '../../assets/css/SphereWords.css';

import codeher from '../../assets/images/coding1.JPG'
import codeherCafe from '../../assets/images/coding2.JPG'

import clearBlue from '../../assets/images/coding3.JPG'
import gotAutism from '../../assets/images/coding4.JPG'
const CodeModalImages = () => {
  const sphereRef = useRef(null);

  useEffect(() => {
    const sphere = sphereRef.current;
    const words = sphere.querySelectorAll('.wordNext');
    const radius = 300;
    let angle = .008;

    const updatePosition = () => {
      words.forEach((word, index) => {
        const x = radius * Math.sin(angle + index * ((2 * Math.PI) / words.length));
        const z = radius * Math.cos(angle + index * ((2 * Math.PI) / words.length));
        word.style.transform = `translate3d(${x}px, 0, ${z}px)`;
      });
      angle += 0.005;
      requestAnimationFrame(updatePosition);
    };

    updatePosition();
  }, []);

  return (
    <>
    <div className="sphere-words" ref={sphereRef}>
      <div className="wordNext"><img style={{width: '175%'}} className='sphereImg' alt="sphere" src={codeher} /></div>
      <div className="wordNext"></div>
      <div className="wordNext"><img style={{width: '175%'}} className='sphereImg' alt="sphere" src={codeherCafe} /></div>
          <div className="wordNext"></div>
      <div className="wordNext"><img style={{width: '175%'}} className='sphereImg' alt="sphere" src={clearBlue} /></div>
      
      <div className="wordNext"></div>
      <div className="wordNext"><img style={{width: '175%'}} className='sphereImg' alt="sphere" src={gotAutism} /></div>


  
  
    </div>
    

    </>
  );
};

export default CodeModalImages;