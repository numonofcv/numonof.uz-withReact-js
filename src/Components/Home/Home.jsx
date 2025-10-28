import React from 'react';
import '../../index.scss';
import './Home.scss';
import { SiNetlify } from 'react-icons/si';

export default function Home() {
return (
<section className="hero">
  <div className="container">
    <div className="hero__text">
      <h2 className='subtitle'>Hi, I'm Islom 👋</h2>
      <h1 className='title'>Creative <span>Front-End</span> Developer</h1>
      <p className='subtitle'>Building modern, interactive, and beautiful web apps</p>
      <button className="button-active">Contact Me</button>
      <button className="button">View Projects</button>
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
  </div>
</section>
);
}