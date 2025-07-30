import React from 'react';
import '../../index.css';
import './Home.css';
import { heroImg, } from '../assets/images/images';
import { SiNetlify } from 'react-icons/si';

export default function Home() {
return (
<section className="hero">
  <div className="container hero__container">
    <div className="hero__text">
      <h1 className='title'>Hi, I'm Islom Numonov.<br /> Web Developer</h1>
      <p className='description'>I build responsive websites and web applications.</p>
      <button className="button">Read More</button>
      <div class="social">
        <a class="social-btn" href="https://github.com/numonof?tab=repositories">
          <i class="bi bi-github"></i>
        </a>
        <a class="social-btn" href="https://app.netlify.com/teams/numonof/sites">
          <SiNetlify size={30} />
        </a>
        <a class="social-btn" href="https://www.linkedin.com/in/islomjon-no-monov-2a49a420a/">
          <i class="bi bi-linkedin"></i>

        </a>
      </div>
    </div>
    <div className="hero__image">
      <img src={heroImg} alt="Alex Smith" />
    </div>
  </div>
</section>
);
}