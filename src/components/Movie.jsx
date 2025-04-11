import React from 'react'
import img1  from '../../public/MOVIE_MATINEE/n3b8puwcjgzlrexwwxrc_waxusm.jpg'
import img2  from '../../public/MOVIE_MATINEE/fpll0rjzfbgcf8cd68gx_qzq8u5.jpg'
import img3  from '../../public/MOVIE_MATINEE/ulms1l2zpxdsb4nt7dgj_ewp4k7.jpg'
import { useState,useEffect} from 'react'





const images = [
  img1,img2,img3
  
];



const Movie = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
     useEffect(()=>{
          const interval =setInterval(() => {
            nextSlide();
          }, 4000);
          return ()=> clearInterval(interval);
         },[currentIndex]);
     
       const prevSlide = () => {
         setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
       };
     
       const nextSlide = () => {
         setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
       };
   return (
      <div>
             <div className="main-container">
             <section className="right">
     <h1 className="heading">Movie Matinee</h1>
     <div className='description' >
         
     Expresso’s Signature Event, Secret Valentine, brought an unforgettable cinematic experience to NIT Patna with the screening of Sita Ramam!<br />
     <br />
As part of the broader Secret Valentine celebration, Movie Matinee was organized by Expresso, the Art and Literary Club of NITP.<br />
<br />
On February 9th, 2024, at Meghnad Saha Hall, we gathered to celebrate Valentine’s week filled with drama and love. Starting at 5:30 PM, the event transformed the hall into a hub of excitement and anticipation. The atmosphere was electric as the lights dimmed and Sita Ramam began, promising to deliver not just a movie, but an experience that resonated deeply with each viewer. The film’s compelling narrative of love and connection was perfect for the season of romance.<br />
<br />
It was more than just a movie night; it was a communal celebration of storytelling and shared emotions, all orchestrated by Expresso.<br />
<br />
The event truly highlighted the magic of cinema in bringing people together, making it an evening to remember.
     </div>
                 </section>
                 <section className="left">
                 <img src={images[currentIndex]} alt="NF" />

<div>
<button onClick={prevSlide} className="leftbtn">‹</button>
<button onClick={nextSlide} className="rightbtn">›</button>
</div>
   
                 </section>
                 
             </div>
         </div>
       )
     }
  

export default Movie