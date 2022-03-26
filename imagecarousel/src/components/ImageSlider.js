import ImageData from './imageData';
import { useState } from 'react';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
const ImageSlider = () => {
    const [current,setCurrent] = useState(0)
    const length =ImageData.length; 

    const prevSlide=()=>{
        if(current > 0){
            setCurrent(current-1)
        }
    }
    const nextSlide=()=>{
        if(current < 1)
        {setCurrent(current+1)}
    }
  return(
      <>
      <section className = "slider">
          <AiOutlineArrowLeft className = "leftArrow" onClick={prevSlide}/>
        <AiOutlineArrowRight className = "rightArrow" onClick={nextSlide}/>
          {ImageData.map((data,index) => {
              return (
                  < div className={index === current ? "slide active":"slide"} key={index}>
                      {index === current && (
                        <div className="">
                          <img src={data.image} alt={data.title} className="image"/>
                          <p>{data.title}</p>
                          </div>
                      )}
                  
                  </div>
              )
          })}
      </section>
      </>
  );
};

export default ImageSlider;
