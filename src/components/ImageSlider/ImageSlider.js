import React, { useState } from 'react';
import { SliderData } from './SliderData';
//imported a icon package that had these arrows
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

//destructuring the slides and passing them in through the app.js
const ImageSlider = ({ slides }) => {
    const [currentPhoto, setCurrentPhoto] = useState(0)
    const length = slides.length

    //set the state with currentPhoto
    // check if it's length - 1 (starting at 0 with the set state of 0)
    // otherwise set it to currentPhoto plus 1
    // then we call this function in the onClick 
    const nextSlide = () => {
        setCurrentPhoto(currentPhoto === length - 1 ? 0 : currentPhoto + 1)
    }

    //if state is back on 0, then set the length to subtract one
    //call the function in the onClick 
    const previousSlide = () => {
        setCurrentPhoto(currentPhoto === 0 ? length - 1 : currentPhoto - 1)
    }
    // if we have no data, then it wont return 
    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }
    console.log('this is the currentPhoto', currentPhoto)

  return (
    <section className="slider">    
        <ul>
            <FaArrowAltCircleLeft className="left-arrow"  onClick={previousSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
            return (
                <div className={index === currentPhoto ? 'slide active' : 'slide'} key={index}>
                    {index === currentPhoto && (
                        <li key={slide.id}>
                        <img src={slide.image} alt="reggie photo" className="image"/>
                        </li>
                    )}
                </div>
            )
        })}
        </ul>
    </section>
   
  )
}

export default ImageSlider;