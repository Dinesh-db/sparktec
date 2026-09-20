import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Services.css';

const Services = () => {
  
    const serviceOfferings = [
  {
    id: 'om-turnkey',
    title: 'Turnkey Operation & Maintenance (O&M)',
    tagline: 'End-to-End Fleet Management',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    description: 'Complete operational and maintenance coverage tailored for industrial plants, mining sites, and private rail yards. We deploy dedicated teams to handle daily shunting operations, scheduled overhauls, and preventative upkeep.',
    features: [
      'Full manpower deployment (Drivers, Shunters, Technicians)',
      'Guaranteed locomotive uptime SLA compliance',
      'In-house spare inventory management',
      'Comprehensive logbook and health reporting'
    ]
  },
  {
    id: 'amc',
    title: 'Annual Maintenance Contracts (AMC)',
    tagline: 'Predictable Upkeep & Risk Reduction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    description: 'Customized AMC plans designed to eliminate unexpected operational breakdowns. Our regular audit schedules keep your diesel and industrial locomotives operating at peak safety and fuel efficiency.',
    features: [
      'Preventive and predictive maintenance schedules',
      'Routine filter, oil, and fluid replacement',
      'Emergency response for critical breakdowns',
      'Detailed mechanical and electrical health checks'
    ]
  },
  {
    id: 'breakdown-repairs',
    title: 'Rapid Breakdown & Overhaul Services',
    tagline: 'Minimizing Downtime when it Matters Most',
    // UPDATED WORKING IMAGE URL BELOW:
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'On-site technical support for urgent mechanical, electrical, pneumatic, and hydraulic failures. Our expert diagnostic technicians perform root-cause analysis to quickly bring halted locomotives back into service.',
    features: [
      'On-site field troubleshooting & root-cause analysis',
      'Engine overhaul & transmission repairs',
      'Pneumatic brake testing & valve recalibration',
      'Electrical panel and alternator rewinding/repairs'
    ]
  }
];

  const workflowSteps = [
    { step: '01', title: 'Inspection & Audit', desc: 'Thorough technical assessment of engine, brake, and electrical systems.' },
    { step: '02', title: 'Custom Scope Plan', desc: 'Tailored maintenance or O&M schedule based on operational demands.' },
    { step: '03', title: 'Execution & Deployment', desc: 'Skilled technician deployment and genuine spare part installation.' },
    { step: '04', title: 'Testing & Handover', desc: 'Rigorous load testing, safety verification, and full documentation.' }
  ];

  return (
    <div className="services-container">
      {/* Hero / Header Section */}
      <section className="services-header">
        <div className="header-badge">Services & Operations</div>
        <h1>Locomotive Operations & Maintenance</h1>
        <p className="header-lead">
          From turnkey O&M management and customized AMCs to rapid emergency repairs, we deliver technical expertise to maximize locomotive availability.
        </p>
      </section>

      {/* Execution Workflow Bar */}
      <section className="workflow-section">
        <div className="section-title-center">
          <h2>Our Execution Framework</h2>
          <p>Systematic approach to quality and safety</p>
        </div>
        <div className="workflow-grid">
          {workflowSteps.map((item, index) => (
            <div key={index} className="workflow-card">
              <span className="workflow-num">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Alternating Service Blocks */}
      <section className="services-list-section">
        <div className="services-list">
          {serviceOfferings.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-block ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-image-overlay">
                  <span className="service-tag">{service.tagline}</span>
                </div>
              </div>

              <div className="service-content">
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="service-btn">
                  Inquire About {service.title.split(' ')[0]} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SLA & Safety Commitment Callout */}
      <section className="services-cta-banner">
        <div className="cta-content">
          <h2>Need a Full Operations & Maintenance Proposal?</h2>
          <p>
            Let our technical team evaluate your rail infrastructure, fleet size, and operational requirements to provide a customized O&M estimate.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Request Site Inspection</Link>
            <a href="tel:+910000000000" className="btn-secondary-outline">📞 Speak with Engineers</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;