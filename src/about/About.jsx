import React from 'react';
import './About.css';
import profileImg from '../assist/img/profile.jpg'; // مسار صورتك الشخصية

export default function About() {
  const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'HTML5 & (S)CSS',
    'PHP & MySQL',
    'Git & GitHub',
    'Responsive Design',
  ];

  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="section-title">
        <span className="section-number">01.</span>
        <h2>About Me</h2>
        <div className="title-line"></div>
      </div>

      <div className="about-grid">
        {/* عمود النص التقديمي والمهارات */}
        <div className="about-text">
          <p>
            Hello! I'm Al Ghieth Melhem, a front-end developer driven by transforming ideas
            into responsive, user-friendly digital products. My journey combines technical 
            problem-solving, continuous learning, and a solid focus on modern web interfaces.
          </p>

          <p>
            I specialize in crafting high-performance, accessible websites and web applications. 
            Whether building dynamic user interfaces or integrating backend workflows, I prioritize 
            clean architecture and seamless user experiences.
          </p>

          <p>Here are a few technologies I’ve been working with recently:</p>

          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* عمود الصورة الشخصية مع التأثير التفاعلي */}
        <div className="about-image-wrapper">
          <div className="image-card">
            <div className="img-frame"></div>
            <div className="img-container">
              <img src={profileImg} alt="Al Ghieth Melhem" className="profile-img" />
              <div className="img-tint"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}