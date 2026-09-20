import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  const coreSolutions = [
    { title: 'Locomotive Spare Parts', desc: 'Engine spares, electricals, hydraulic & pneumatic components.' },
    { title: 'Electrical Maintenance', desc: 'Control panels, alternators, sensors, and full fault diagnosis.' },
    { title: 'Mechanical Maintenance', desc: 'Engine servicing, cooling systems, bogies, and suspension inspection.' },
    { title: 'Pneumatic Systems', desc: 'Air compressors, brake valves, and pressure testing.' },
    { title: 'Hydraulic Systems', desc: 'Pumps, valves, cylinder servicing, and leakage troubleshooting.' },
    { title: 'Engine Maintenance', desc: 'Comprehensive overhaul, troubleshooting, and scheduled servicing.' },
    { title: 'Gearbox Repair', desc: 'Precision gearbox inspection, coupling, and repair.' },
    { title: 'Locomotive AMC', desc: 'Customized Annual Maintenance Contracts for high uptime.' },
    { title: 'Locomotive O&M', desc: 'Complete operation and maintenance with qualified operators.' },
    { title: 'Operator & Manpower', desc: 'Deployment of qualified operators and shunting pointsmen.' }
  ];

  const industries = [
    'Steel Plants', 'Cement Plants', 'Mining Industries', 'Power Plants',
    'Aluminium Industries', 'Ports & Logistics', 'Railway Infrastructure', 'Heavy Engineering'
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">Industrial Locomotive Partner</div>
          <h1 className="hero-title">Complete Locomotive Solutions Under One Roof</h1>
          <p className="hero-subtitle">
            Sparktec Locomotives delivers comprehensive solutions for diesel and industrial locomotives—from spare parts supply to maintenance, overhaul, and complete O&M services.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">Get Technical Support</Link>
            <Link to="/product" className="btn-secondary">Explore Spares</Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="stats-strip">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Reliability & Quality Focus</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Breakdown Support</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">FULL</span>
            <span className="stat-label">Lifecycle Maintenance</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">O&M</span>
            <span className="stat-label">Turnkey Operations</span>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="solutions-section">
        <div className="section-header">
          <h2>Our Core Solutions</h2>
          <p>Engineered to minimize downtime and maximize locomotive availability in heavy operations.</p>
        </div>
        <div className="solutions-grid">
          {coreSolutions.map((item, index) => (
            <div key={index} className="solution-card">
              <span className="card-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial Sectors */}
      <section className="industries-section">
        <div className="section-header">
          <h2>Industries We Support</h2>
          <p>Delivering precision support across critical heavy industrial sectors.</p>
        </div>
        <div className="industries-grid">
          {industries.map((ind, index) => (
            <div key={index} className="industry-pill">
              <span>{ind}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2>Need Emergency Breakdown or Spare Parts Support?</h2>
          <p>Our technical team is ready to keep your locomotives safe, efficient, and operational.</p>
          <Link to="/contact" className="btn-primary">Contact Sales & Service</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;