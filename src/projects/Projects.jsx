import React from 'react';
import FeaturedProject from '../components/featuredCard/FeaturedProject';
import './Projects.css';
import albaredeImg from '../assist/img/barde.png';
import lawsImg from '../assist/img/laws.png'; // أضف صورة مشروع القوانين هنا
import mohamadImg from '../assist/img/mohamedPro.png';
import medicalAppImg from '../assist/img/2.png';
import lawnexImg from '../assist/img/lawnex.png';
import brandingMockupImg from '../assist/img/Albarede-corporate-1.jpg';

export default function Projects() {
  const projects = [
    {
      title: "Al-Baradie Law Firm Portal",
      description:
        "A full-featured corporate legal portal with dynamic article publishing, automated client consultations, and responsive layout architectures optimized for search engines.",
      technologies: ["React", "PHP", "MySQL", "CSS"],
      image: albaredeImg,
      liveUrl: "https://www.albarede.com",
      githubUrl: "https://github.com/alghieth",
    },
    {
      title: "Digital Law Library",
      description:
        "An organized, searchable digital legal repository featuring instant search, categorized article filtering, print-ready document styling, and social sharing workflows.",
      technologies: ["React", "PHP", "MySQL", "JavaScript", "CSS3"],
      image: lawsImg,
      liveUrl: "https://www.albarede.com/laws",
      githubUrl: null,
    },
    {
  title: "Personal Portfolio & Legal Profile",
  description:
    "A bespoke personal branding platform engineered for a prominent legal consultant, featuring detailed professional biographies, media features, interactive consultation booking flows, and an integrated legal insights showcase.",
  technologies: ["React", "JavaScript", "Responsive UI", "CSS3"],
  image: mohamadImg, 
  liveUrl: "https://mohamad.albarede.com/",
  githubUrl: null,
  },
  {
     title: "Al Barede Corporate Identity & Brand System",
    description:
    "A comprehensive corporate visual identity engineered for a distinguished legal practice. Encompassed the design of the official logo suite, branded stationary, court-ready document templates, and bespoke business collateral deployed across all professional touchpoints.",
    technologies: ["Branding", "Corporate Identity", "Adobe Photoshop"],
    image: brandingMockupImg, 
    liveUrl: "https://alghieth.github.io/albarede/#home-page", 
    githubUrl: null, 
    },
  {
  title: "Lawnex Legal AI Interface",
  description:
    "A sleek, responsive user interface designed for a legal AI platform, providing intuitive workflows for automated case research, legislative indexing, and streamlined client interactions.",
  technologies: ["React", "CSS", "JavaScript", "UI/UX Design"],
  image: lawnexImg,
  liveUrl: "https://lawnex.app/",
  githubUrl: null,
  },
  {
    title: "German Medical Terminology Platform",
    description:
        "An interactive e-learning web platform engineered for healthcare professionals to master specialized German medical terminology, integrating Speech-to-Text and Text-to-Speech APIs for real-time vocal training, pronunciation assessment, and automated retention drills.",
    technologies: ["JavaScript", "Web Speech API", "CSS3"],
    image: medicalAppImg,
    liveUrl: null,
    githubUrl: "https://alghieth.github.io/Fachbegriffe-Mainz/", }
];

  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      {/* ترويسة القسم */}
      <div className="section-title">
        <span className="section-number">03.</span>
        <h2>Some Things I’ve Built</h2>
        <div className="title-line"></div>
      </div>

      {/* حاوية بطاقات المشاريع المتداخلة */}
      <div className="projects-list">
        {projects.map((project, index) => (
          <FeaturedProject
            key={index}
            project={project}
            isReversed={index % 2 !== 0} // يعكس اتجاه البطاقة تلقائياً لكل عنصر زوجي
          />
        ))}
      </div>
    </section>
  );
}