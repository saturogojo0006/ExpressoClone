import React from 'react'
import img1 from '../../public/VALENTINES/IMG_0006_etbsyw_aots0d.jpg'
import img2 from '../../public/VALENTINES/IMG_0002_qpnh9g_mp5pyt.jpg'
import img3 from '../../public/VALENTINES/IMG_0007_ohhvzp_ntisv2.jpg'
import { useState,useEffect } from 'react'


const images = [
  img1,img2,img3
  
];




const Doodle = () => {
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
           
                <section className="left">
                <img src={images[currentIndex]} alt="NF" />

<div>
<button onClick={prevSlide} className="leftbtn">‹</button>
<button onClick={nextSlide} className="rightbtn">›</button>
</div>
  
                </section>
                <section className="right">
    <h1 className="heading">Valentine's Week
    </h1>
    <div className='description' >
        
    What's better than sharing your feelings and thoughts to your favourite person without the fear of judgement, that too in the love-filled and heartfelt week of valentine's. <br />
    <br />
Expresso organised a fun event during the valentine's week from 7th to 14th February titled 'Love is in the air' which allowed everyone to pour their heart out anonymously.
<br />
The club's social media handle acted as a messenger to deliver the special messages in a secret way, i.e without letting the receiver know about the one who wrote the message.
<br />
This event allowed students to nurture new connections that enhanced their social experiences in the college and created a vibrant and inclusive environment which celebrated different forms of love and connections.

    </div>
                </section>
                
            </div>
        </div>
      )
    }

export default Doodle