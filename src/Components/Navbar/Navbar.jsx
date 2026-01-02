import React, { useEffect, useState } from 'react'
import './Navbar.css'
import EduFy from '../../assets/EduFy.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {

const [sticky,setSticky] = useState(false);

useEffect(()=>{
  window.addEventListener('scroll',()=>{
     window.scrollY > 200 ? setSticky(true) : setSticky(false);
  })
},[])

const [menuOpen,setMenuOpen] = useState(false);
const toggleMenu = () => {
 menuOpen? setMenuOpen(false): setMenuOpen(true); 
}

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img className="logo" src={EduFy} alt="EduFy Logo" />
      <ul className= {menuOpen?'':'hide-mobile-menu'}>
        <li> <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
        <li> <Link to="program" spy={true} smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li> <Link to="about" spy={true} smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li> <Link to="campus" spy={true} smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li> <Link to="testimonials" spy={true} smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
