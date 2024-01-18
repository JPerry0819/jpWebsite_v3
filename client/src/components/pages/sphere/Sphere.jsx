import React, { useRef, useEffect } from 'react';
import '../../assets/css/SphereWords.css';

import codeher from '../../assets/images/codeherBusiness.png'
import codeherCafe from '../../assets/images/codeherCafe.png'
import clearBlue from '../../assets/images/clearBlue.png'
import gotAutism from '../../assets/images/gotAutism.png'
import catalyst from '../../assets/images/c4c.png'
const SphereWords = () => {
  const sphereRef = useRef(null);

  useEffect(() => {
    const sphere = sphereRef.current;
    const words = sphere.querySelectorAll('.word');
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
      <div className="word"><img style={{width: '250%'}} className='sphereImg' alt="sphere" src={codeher} /></div>
      <div className="word"><img style={{width: '250%'}} className='sphereImg' alt="sphere" src={catalyst} /></div>
      <div className="word"><img style={{width: '250%'}} className='sphereImg' alt="sphere" src={codeherCafe} /></div>
          <div className="word"></div>
      <div className="word"><img style={{width: '250%'}} className='sphereImg' alt="sphere" src={clearBlue} /></div>
      
      <div className="word"></div>
      <div className="word"><img style={{width: '250%'}} className='sphereImg' alt="sphere" src={gotAutism} /></div>


  
  
    </div>
    

    </>
  );
};

export default SphereWords;