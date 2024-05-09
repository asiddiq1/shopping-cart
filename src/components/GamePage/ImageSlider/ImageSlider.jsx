import {useState, useRef} from "react";
import "./ImageSlider.css"


function ImageSlider({images, gameName}){

    const [imgIndex, setImgIndex] = useState(0);
    const gameImagesRef = useRef(null);
  
    function slideRight(){
        setImgIndex((prevIndex) => (prevIndex+1 === Math.ceil(images.length/2) ? 0 : prevIndex + 1));
        transitionImg('right');
    }

    function slideLeft(){
        setImgIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(images.length/2)-1: prevIndex - 1));
        transitionImg('left');
    }

    function transitionImg(direction){
        const slider = gameImagesRef.current;
        const imgWidth = slider.querySelector('img').clientWidth; 
        if (direction === 'right'){
            slider.scrollLeft += imgWidth;
        }
        else{
            slider.scrollLeft -= imgWidth;
        }
    }


    return (
        <div className="image-slider-container">
            <button className="button-left" onClick={() => slideLeft(images)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="white" d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/></svg>
            </button>
            <div className="game-images" ref={gameImagesRef}>
                {images?.map((image, index) => (
                    <img key={index} src={image} alt={`${gameName}-${imgIndex}`}/>
                ))}
                {images.length % 2 == 1 &&
                <img key={0} src={images[0]} alt={`${gameName}-${imgIndex}`}/>
                }
            </div>
            <button className="button-right" onClick={() => slideRight(images)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="white" d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
            </button>

        </div>

    );

}



export default ImageSlider;
