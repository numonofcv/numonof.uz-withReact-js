import React, { useState } from 'react';
import './About.css';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  return (
    <section className='about'>
      <div className="container about__container">
        <h3 className="title">About</h3>
        <p className="description">
          I’m Islomxon — a web developer specializing in creating modern, responsive, and user-friendly websites and web applications. With over 1.5 years of hands-on experience, I enjoy turning complex ideas into simple, clean, and beautiful solutions.
          <span className="dots">{!showMore && '...'}</span>
          {showMore && (
            <span className="more-text">
              <br /><br />
              My main focus is building responsive and efficient user interfaces using HTML, CSS, JavaScript, and modern frontend technologies. I always strive to write clean, maintainable, and scalable code.
              <br /><br />
              Currently, I’m working independently on demo projects like challenges from @frontendmentor and clones of popular social media platforms. At the same time, I’m open to working with teams and contributing to larger projects. If you’re looking for high-quality and modern frontend solutions — I’m ready to help bring your ideas to life!
              <br /><br />
              I’m always learning new technologies and improving my skills to stay up-to-date with the latest trends and best practices in web development. When I’m not coding, I love experimenting with new ideas, building small projects, and sharing what I learn with others.
              <br /><br />
              For me, a great web project is the perfect balance of creativity, technical skill, and attention to detail — and that’s exactly what I aim to bring to every project I work on.
            </span>
          )}
        </p>
        <button className="read-more-btn" onClick={toggleText}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </section>
  );
}
    