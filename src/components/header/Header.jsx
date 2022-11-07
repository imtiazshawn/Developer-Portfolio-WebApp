import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import headImg from '../../assets/imtiazshawn.jfif'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Imtiaz Shawn</h1>
        <h5 className="text-light">Mern-Stack Developer</h5>
        <div className="wrapper">
           <img src={headImg} alt="" />
        </div>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
