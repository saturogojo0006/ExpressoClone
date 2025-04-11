import React from 'react'
import './mun.css'
import img1 from '../../public/MUN/DSC_0418_lclzcs_dpla5k.jpg'
import img2 from '../../public/MUN/20230909_114338_giwxyb_vd6cvr.jpg'
import img3 from '../../public/MUN/20230909_154855_jcilfo_vzlwuk.jpg'
import { useState,useEffect } from 'react'





const images = [
  img1,img2,img3
  
];




const Mun = () => {
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
   <h1 className="heading"> Mun 2.0</h1>
   <div className='description' >
       
   Literature and debate are twin pillars of intellectual growth; while literature enriches our minds with diverse narratives and profound truths, debate sharpens our ability to challenge, defend, and refine those ideas through rigorous discourse.
<br />
During TCF'24 , the Literature and Art Club of NIT Patna, Expresso organized a series of stimulating debates under the event named SANHITA '24 . Each of the debates had many teams each consisting of 3 members.<br />
<br />
The event consisted of :
1. Parliamentary Debate<br />
- Teams argue for or against a motion in a formal, structured format, simulating parliamentary procedures. Participants must use logic, evidence, and rhetoric to defend their stance, with a focus on quick thinking and teamwork.
2. English Debate<br />
- Teams debate on various topics in English, focusing on clear articulation, strong arguments, and rebuttals. The emphasis is on language proficiency, critical analysis, and persuasive speaking skills.
3. Hindi Debate<br />
- Similar to the English Debate but conducted in Hindi, this event challenges participants to demonstrate their debating skills in their native language, promoting cultural and linguistic diversity.
4. Turn Coat<br />
- A single participant must argue both for and against a given topic, switching sides at designated intervals. This format tests the debater's ability to understand and articulate both perspectives, showcasing flexibility and comprehensive understanding of the subject.<br />
5. Story Wars<br />
- Teams of three are given a picture and tasked with collaboratively writing a story based on it. This event,emphasizes creativity, teamwork, and narrative skills, allowing participants to explore imaginative storytelling.
<br />
These events saw enthusiastic participation from students across various disciplines, engaging in thought-provoking discussions on diverse topics. The debates highlighted the power of critical thinking, fostering an environment of intellectual curiosity and lively discourse.
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

export default Mun