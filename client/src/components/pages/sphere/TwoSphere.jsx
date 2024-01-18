import React, { useRef, useEffect } from 'react';
import '../../assets/css/sphere.css';
import Cutout from '../cutout/Cutout';

const SphereWords = () => {
    const sphereRef = useRef(null);


    useEffect(() => {
        const sphere = sphereRef.current;
        const words = sphere.querySelectorAll('.word');
        const radius = 235;
        let angle = 0;

        const updatePosition = () => {
            words.forEach((word, index) => {
                const x = radius * Math.sin(angle + index * ((2 * Math.PI) / words.length));
                const z = radius * Math.cos(angle + index * ((2 * Math.PI) / words.length));
                word.style.transform = `translate3d(${x}px, 0, ${z}px)`;
            });
            angle += 0.01;
            requestAnimationFrame(updatePosition);
        };

        updatePosition();
    }, []);

    return (
        <div className='sphere-words' ref={ sphereRef }>


<div className="word" >*</div>
            <div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>J</div>
            <div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>E</div>
            <div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>S</div>
            <div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>S</div>
            <div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>I</div>
            <div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>C</div>
            <div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>A</div>


            <div className="word">*</div>


<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>P</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>E</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>R</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>R</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>Y</div>
        
<div className='cutout'>
    <Cutout />
</div>


<>

<div className="word" >*</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>W</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>E</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>B</div>
<div className="word" >*</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>D</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>E</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>V</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>E</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>L</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>O</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>P</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>E</div>
<div className="word" style={ { color: '#000000', textShadow: '1px 1px 9px  gold' } }>R</div>
</>
        </div>
    );
};

export default SphereWords;