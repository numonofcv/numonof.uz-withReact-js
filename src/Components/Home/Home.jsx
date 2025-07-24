import React from 'react';
import '../../index.css';
import './Home.css';
import { heroImg } from '../assets/images/images';

export default function Home() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__text">
          <h1 className='title'>Hi, I'm Islom Numonov.<br /> Web Developer</h1>
          <p className='description'>I build responsive websites and web applications.</p>
          <button className="hero__button">Read More</button>
        </div>
        <div className="hero__image">
          <img src={heroImg} alt="Alex Smith" />
        </div>
      </div>
    </section>
  );
}
