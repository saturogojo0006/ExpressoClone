import React from 'react'
import img1 from '../../public/SANHITA/DSC_0070-min_h8bjbh_cy3qqs.jpg'
import img2 from '../../public/SANHITA/ygureoalb5qt6cackftr_nk81ly.jpg'
import img3 from '../../public/SANHITA/kqivfztpeiqbdcqmxyzg_yt0mkc.jpg'
import { useState,useEffect } from 'react'






const images = [
  img1,img2,img3
  
];




const Tcfsanhita = () => {
 const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(()=>{
       const interval =setInterval(() => {
         nextSlide();
       }, 3000);
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
 <h1 className="heading">Tcf-Sanhita</h1>
 <div className='description' >
     
 ARTOPIA was a vibrant three-day online art workshop organized by Expresso – The Literary and Art Club, NIT Patna, bringing together artists, creators, and enthusiasts to celebrate the power of artistic expression. The event featured renowned artists who shared their expertise, guiding participants through different artistic styles, techniques, and storytelling methods. <br />
 <br />
 The event featured three exclusive workshops:
 <br />
 - Fusing Tradition with Digital Art – Led by Aman Varma, this session explored the fusion of traditional artistic elements with modern digital tools, showcasing how heritage and technology can blend seamlessly in digital art.
 <br />
 - Storyboard Saga – Conducted by Vibha Rao, this workshop delved into the art of visual storytelling through comics and animation, capturing the nuances of characters, emotions, and everyday narratives.
 <br />
 - Heritage Hues – Guided by Vidushini Prasad, this session celebrated the intricate beauty of Madhubani painting, highlighting its rich cultural significance and timeless artistic traditions.
 
 <br /><br />
 More than just a series of workshops, ARTOPIA was a creative space where imagination thrived, stories unfolded, and artistic passions were ignited. It was a journey of learning, exploration, and inspiration—one that encouraged participants to push their creative boundaries and embrace the magic of art.
 </div>
             </section>
         </div>
     </div>
   )
 }

export default Tcfsanhita