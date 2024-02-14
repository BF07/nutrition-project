import { useState } from 'react'

import carrousselFruitBowl from '../../assets/carroussel-fruit-bowl.webp'
import carrousselFruits from '../../assets/carroussel-fruits.webp'
import carrousselSandwich from '../../assets/carroussel-sandwich.webp'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'

import './carroussel.css'

export default function Carroussel() {
    const [image, setImage] = useState(0);
    const [transformValue, setTransformValue] = useState(0);
    const images = [carrousselFruitBowl, carrousselFruits, carrousselSandwich];

    const toggleImage = (direction) => {
        let newImage;
        let newTransformValue;
    
        if (direction === 'left') {
          // Si sur la première image, revenir à la troisième image
            if (image === 0) {
                newTransformValue = -200;
                newImage = images.length - 1;
            } else {
                newTransformValue = transformValue + 100;
                newImage = (image - 1 + images.length) % images.length;
            }
        } else {
            newTransformValue = transformValue - 100;
            newImage = (image + 1) % images.length;
        }
    
        // Si le nouveau transformValue est inférieur à -200, revenir à 0
        if (newTransformValue < -200) {
            setTransformValue(0);
        } else {
            setTransformValue(newTransformValue);
        }
        setImage(newImage);
    };
    
    return (
        <div className="carroussel-container">
            <div className="wrapper">
                <FontAwesomeIcon className="left-arrow" icon={faArrowAltCircleLeft} onClick={() => toggleImage('left')} />
                <div className="carrousel-images" style={{ transform: `translateX(${transformValue}%)` }}>
                    {images.map((img, index) => (
                        <img key={index} className={`carroussel-img ${index === image ? 'active' : ''}`} src={img} alt="" />
                    ))}
                </div>
                <FontAwesomeIcon className="right-arrow" icon={faArrowAltCircleRight} onClick={() => toggleImage('right')} />
            </div>
        </div>
    );
}
