import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/About.css';

const About = () => {
  const whyChooseUs = [
    { title: 'Locomotive Spare Parts', desc: 'Wide range of quality spares for diesel and industrial locomotives.' },
    { title: 'Technical Expertise', desc: 'Deep mechanical, electrical, pneumatic, and hydraulic domain knowledge.' },
    { title: 'AMC & Turnkey O&M', desc: 'Flexible maintenance contracts and complete manpower deployment.' },
    { title: 'Rapid Breakdown Support', desc: 'Root cause analysis and swift repair to restore locomotive service safely.' }
  ];

  const safetyPoints = [
    'PPE Compliance', 'Safe Shunting Practices', 'Pre-Start Inspections',
    'Systematic Preventive Maintenance', 'Proper Documentation & Handover', 'Workplace Safety Standards'
  ];

  return (
    <div className="about-container">
      {/* Header / Hero Section */}
      <section className="about-header">
        <div className="header-badge">Sparktec Locomotives</div>
        <h1>Your Reliable Partner for Locomotive Spares & Services</h1>
        <p className="header-lead">
          Sparktec Locomotives is an industrial locomotive solutions company serving customers requiring reliable spares, maintenance, repair, and operational support.
        </p>
      </section>

      {/* Main Content & Mission/Vision */}
      <section className="about-story-section">
        <div className="story-grid">
          <div className="story-content">
            <h2>Keeping Heavy Industry Moving</h2>
            <p>
              Our objective is simple: reduce locomotive downtime and improve operational reliability through quality spare parts, skilled manpower, and systematic maintenance practices.
            </p>
            <p>
              We understand the critical importance of locomotive availability in industrial operations. Our services are designed to support customers throughout the locomotive lifecycle—from individual spare parts supply to preventive maintenance, breakdown support, and complete turnkey O&M services.
            </p>
          </div>

          <div className="mission-vision-container">
            <div className="mv-card">
              <span className="mv-tag">OUR MISSION</span>
              <h3>Dependable Technical Excellence</h3>
              <p>To provide dependable locomotive products and technical services with a strong focus on quality, safety, reliability, and customer satisfaction.</p>
            </div>

            <div className="mv-card vision-card">
              <span className="mv-tag">OUR VISION</span>
              <h3>Trusted National Partner</h3>
              <p>To become a trusted locomotive solution partner for industries across India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="section-title-box">
          <h2>Why Choose Sparktec Locomotives?</h2>
          <p>One Partner. Complete Locomotive Solutions.</p>
        </div>
        <div className="why-grid">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="why-card">
              <span className="card-num">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Quality Section */}
      <section className="safety-section">
        <div className="safety-container">
          <div className="safety-header">
            <h2>Safety First. Reliability Always.</h2>
            <p>Safety is an essential part of our locomotive operations and maintenance activities.</p>
          </div>
          <div className="safety-grid">
            {safetyPoints.map((point, idx) => (
              <div key={idx} className="safety-pill">
                <span className="safety-check">✓</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default About;