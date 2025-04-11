import React from 'react'
import img1 from '../../public/KITABE PADHO/Blue_and_White_Modern_Minimalistic_About_Us_Instagram_Story_qdnjkg_uw78fw.png'
import img2 from '../../public/KITABE PADHO/WhatsApp_Image_2024-06-24_at_13.31.17_4a5d86a9_zuimrw_yca9sm.jpg'
import img3 from '../../public/KITABE PADHO/the_alchemist_vxot9e_ndpqbs.jpg'
import { useState,useEffect } from 'react'





const images = [
  img1,img2,img3
  
];




const KitabePadho = () => {
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
     <h1 className="heading"> Kitabe Padho Behas Nhi Tark Do..</h1>
     <div className='description' >
         
     "Books are our Bestfriends , windows to the World."<br />

<br />
EXPRESSO: The art and literary club of NITPatna started an online Event called " किताबे पढो - बहस नही तर्क दो "..on 1st March, 2024.<br />
<br />
Every month a Book is started in which on each Wednesday and Sunday a content derived from the book is posted on Instagram handel of Expresso.<br />
<br />
- March was the month of Book- “CHANAKYANITI” by acharya Chankya ..<br />
<br />
Chanakyaniti is a collection of aphorisms composed by Chanakya. It is a set of ideas and statements given by the acharya Chankya many of which give valuable tips on how to lead a good and productive life even in this day and age.<br />
<br />
- April was the month of “MADHUSHALA” by harivanshrai bachchan .
<br />
Madhushala is a classic poetry book. The poetic narrative symbolises life as a tavern or a public drinking place. It teaches us to have a must life goal otherwise we will live in distraction and get deviated on life.<br />

- May was the month magic love with " Gunaho Ka Devta " by Dharamveer Bharti .
<br />
The novel tells the passionate love story of Chander and Sudha. The book also addresses moral and ethical concerns . The main character, Chander, is a complex man who struggles to balance between his loyalty to his friend Pammi and his desire for Sudha. The story examines the tension between obligation and desire, as well as effect of our decisions.<br />
<br />
- June was the month of Enlightenment with " GOD OF LITTLE THINGS " by Arundhati Roy
<br />
It is a story about the childhood experiences of fraternal twins whose lives are destroyed by the "Love Laws" prevalent in 1960s Kerala, India.This novel explores love and how love can't be ignored when confronted with social boundaries.
The novel examines how conventional society seeks to destroy true love as this novel is constantly connected to loss, death and sadness.<br />
<br />
This series will stay continued and will bring best out of bestBooks to the readers & learning enthusiasts...
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

export default KitabePadho