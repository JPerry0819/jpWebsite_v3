import React, { useRef, useEffect } from 'react';

import '../../assets/css/ballsphere.css'
import BallCutout from '../cutout/BallCutout';
const BallSphere = () => {
    const ballSphereRef = useRef(null);


    useEffect(() => {
        const ballSphere = ballSphereRef.current;
        const ballWords = ballSphere.querySelectorAll('.ballWord');
        const radius = 150;
        let angle = 0;

        const updatePosition = () => {
            ballWords.forEach((word, index) => {
                const x = radius * Math.sin(angle + index * ((8 * Math.PI) / ballWords.length));
                const z = radius * Math.cos(angle + index * ((5 * Math.PI) / ballWords.length));
                word.style.transform = `translate3d(${x}px, 0, ${z}px)`;
            });
            angle += 0.01;
            requestAnimationFrame(updatePosition);
        };

        updatePosition();
    }, []);
    return (
        <>
        <div className='ballsphere-words' ref={ ballSphereRef }>
            <div className="ballWord" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>HTML</div>
            <div className="ballWord" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>css</div>
            <div className="ballWord" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>SCSS</div>
            <div className="ballWord" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>BOOTSTRAP</div>
           
            <div className="ballWord" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>JAVASCRIPT</div>
            <div className="ballWord" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>JQUERY</div>
            <div className="ballWord" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>REACT</div>
           
            {/* <div className='wdLogo'><BallCutout /></div></> */}
         
            <div className="ballWord" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>EXPRESS</div>
            <div className="ballWord" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>NODEJS</div>
            <div className="ballWord" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>MONGODB</div>
        </div>


        </>
    )
}

export default BallSphere



