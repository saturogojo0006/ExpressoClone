import React from 'react'
import img1 from '../../public/Assets/eventbg_zip57y.png'
import './event.css'
import Artopia from '../components/Artopia'
import Mun from '../components/Mun'
import Tcfsanhita from '../components/Tcf-sanhita'
import KitabePadho from '../components/KitabePadho'
import Doodle from '../components/Doodle'
import Movie from '../components/Movie'
import Footer from '../components/Footer'
const Events = () => {
  return (
    <div>
 <div className='mic-imgc' >
  {/* <img src={img1} alt="ntfound"  className='micimg' /> */}
  <p className='overlay-text' >EVENTS</p>
 </div>

{/* event list */}
<div className='event-container'>
<Artopia />
<Mun />
<Tcfsanhita />
<KitabePadho />
<Doodle />
<Movie />
<Footer />
</div>

    </div>
  )
}

export default Events
