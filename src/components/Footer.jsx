import React from 'react'
import Suggestion from './Suggestion'
import './footer.css'
import logo from '../assets/logo.svg'
const Footer = () => {
  return (
    <div>
        <Suggestion />
        <footer className="bottom">
<div className="icons">
<i className="ri-instagram-line instalogo"></i>
<i class="ri-facebook-circle-fill "></i>
<i class="ri-linkedin-box-fill"></i>
<i class="ri-map-pin-line"></i>
<i class="ri-mail-line"></i>
</div>
<div className="copyright">
    <div className="firstline">
<i class="ri-copyright-line">Expresso NIT Patna</i></div>
</div>
<div className="address">
    <div className="des">
   Student Activity Centre (SAC), NIT Patna
    Ashok Rajpath, Patna, Bihar - 800005</div>

<img src={logo} alt="nf"  />

    </div>

        </footer>



    </div>
  )
}

export default Footer