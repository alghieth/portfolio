import React, { useState } from 'react';
import './Experience.css';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
    company: 'Digital Law Library',
    role: 'Lead Web Developer & Database Architect',
    range: 'Apr 2022 – May 2025',
    url: 'https://www.albarede.com/laws',
    duties: [
      'Engineered a comprehensive, full-stack digital law library system (albarede.com/laws) powered by PHP and MySQL to index, structure, and categorize extensive legal codes and regulatory articles.',
      'Implemented real-time keyword search, multi-tier categorized filtering, and rapid query optimization for seamless navigation through dense legal databases.',
      'Developed tailored features including dedicated print-ready CSS stylesheets for court-ready document formatting and integrated one-click social sharing channels.',
      'Built a secure administrative dashboard for effortless article publishing, categorization updates, and real-time content management.',
    ],
  },
  {
    company: 'Albarede Law Firm Portal',
    role: 'UI/UX Developer & Brand Identity Specialist',
    range: 'Apr 2022 – May 2025',
    url: 'https://www.albarede.com',
    duties: [
      'Designed, built, and maintained the official corporate law firm portal featuring a legal blog, automated appointment bookings, consultation forms, and email notifications.',
      'Drove organic technical and content SEO strategies, achieving over 44,000 search impressions within 6 months with zero paid marketing budget.',
      'Established high regional authority with an audience reach of 70% in Syria and 30% across the Gulf States and Turkey.',
      'Created the complete Corporate Identity (CI), designing the logo suite, typography standards, legal stationery, official envelopes, and physical print collateral across all company touchpoints[cite: 1].',
    ],
  },
    {
      company: 'Learning Platform',
      role: '(Medical Terminology Web App)',
      range: 'Freelance Project',
      url: '#',
      duties: [
        'Architected an interactive e-learning platform dedicated to medical professionals learning German medical terminology.',
        'Integrated Speech-to-Text (STT) and Text-to-Speech (TTS) APIs to enable interactive vocal pronunciation drills and automated speaking assessments.',
        'Designed modular self-testing modules and quizzes to optimize vocabulary retention and active recall.',
      ],
    },
    {
      company: 'Digital Media Channel',
      role: 'Creative Director & Video Content Producer',
      range: 'Oct 2017 – Mar 2022',
      url: '#',
      duties: [
        'Co-founded and scaled an art and design YouTube channel to over 60,000 active subscribers.',
        'Led end-to-end media production using Adobe After Effects and Photoshop for motion graphics, visual assets, video editing, and voice-overs.',
        'Managed channel performance analytics, audience growth funnels, and Google AdSense monetization workflows.',
      ],
    },
    {
      company: 'Freelance Web & Graphic Design',
      role: 'Independent Web & Visual Designer',
      range: 'Oct 2017 – Mar 2022',
      url: '#',
      duties: [
        'Delivered complete visual identity solutions, banners, and digital branding assets for various independent business clients.',
        'Created responsive and mobile-first website prototypes focusing on intuitive layout architecture, typography, and clear conversion paths.',
      ],
    },
  ];

  return (
    <section id="experience" className="jobs-section" data-aos="fade-up">
      <div className="section-title">
        <span className="section-number">02.</span>
        <h2>What I’ve Done</h2>
        <div className="title-line"></div>
      </div>

      <div className="jobs-tabs-container">
        {/* أزرار التبويبات الجانبية */}
        <div className="jobs-tab-list" role="tablist">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              className={`jobs-tab-button ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
              role="tab"
              aria-selected={activeTab === idx}
            >
              {exp.company}
            </button>
          ))}
          {/* مؤشر الهايلايت المتحرك */}
          <div
            className="highlight-bar"
            style={{ transform: `translateY(${activeTab * 42}px)` }}
          ></div>
        </div>

        {/* محتوى التبويب النشط */}
        <div className="jobs-content" role="tabpanel">
          <h3 className="job-role">
            <span>{experiences[activeTab].role}</span>
            <span className="job-company">
              &nbsp;@&nbsp;
              {experiences[activeTab].url !== '#' ? (
                <a href={experiences[activeTab].url} target="_blank" rel="noreferrer">
                  {experiences[activeTab].company}
                </a>
              ) : (
                experiences[activeTab].company
              )}
            </span>
          </h3>

          <p className="job-range">{experiences[activeTab].range}</p>

          <ul className="job-duties">
            {experiences[activeTab].duties.map((duty, idx) => (
              <li key={idx}>{duty}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}