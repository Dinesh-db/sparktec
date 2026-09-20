import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/OM.css';

const OM = () => {
  const [activeScope, setActiveScope] = useState('operations');

  const omScopeData = {
  operations: {
    title: '1. On-Site Shunting & Train Operations',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    description: 'End-to-end movement and positioning of rakes inside plant yards and siding areas.',
    points: [
      'Certified & highly trained locomotive drivers/loco pilots',
      'Shunting staff and signal operators for safe movement',
      '24/7 or shift-based rake handling tailored to plant schedules',
      'Strict adherence to site-specific safety protocols and speed limits'
    ]
  },
  maintenance: {
    title: '2. Preventive & Corrective Maintenance',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    description: 'Systematic daily, weekly, and monthly servicing schedules to prevent unexpected breakdowns.',
    points: [
      'Dedicated mechanical, electrical, and pneumatic technicians on site',
      'In-house management of critical spares, oils, and filters',
      'Scheduled engine overhaul and load testing',
      'Root-cause analysis and swift emergency breakdown restoration'
    ]
  },
  compliance: {
    title: '3. Compliance, Safety & Logbooks',
    // UPDATED WORKING IMAGE URL BELOW:
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Complete documentation and safety standards alignment for heavy industrial setups.',
    points: [
      'Daily digital logbook tracking engine hours and fuel consumption',
      '100% Personal Protective Equipment (PPE) & site hazard compliance',
      'Pre-shift mechanical and pneumatic checklist validation',
      'Monthly operational health and audit reporting to plant heads'
    ]
  }
};

  const matrixData = [
    { feature: 'Dedicated On-Site Crew (Drivers & Shunters)', amc: '❌ Excluded', om: '✅ Included (Full Crew)' },
    { feature: 'Daily Yard Shunting Operations', amc: '❌ Excluded', om: '✅ Included (24/7 or Shift basis)' },
    { feature: 'Preventive Servicing & Audits', amc: '✅ Included', om: '✅ Included' },
    { feature: 'Spare Parts & Consumables Stock', amc: '⚠️ On Demand', om: '✅ Managed On-Site Stock' },
    { feature: 'Uptime SLA Guarantee', amc: '⚠️ Standard', om: '✅ Strict High-Availability SLA' },
    { feature: 'Operational & Safety Logbooks', amc: '⚠️ Service-only', om: '✅ Comprehensive Daily Logs' }
  ];

  return (
    <div className="om-container">
      {/* Hero / Header */}
      <section className="om-header">
        <div className="header-badge">Operations & Maintenance</div>
        <h1>Turnkey Locomotive O&M Solutions</h1>
        <p className="header-lead">
          Complete fleet ownership transfer—we deploy crews, manage maintenance, stock spares, and deliver guaranteed uptime for industrial rail yards.
        </p>

        {/* Operational Highlights Grid */}
        <div className="om-stats-grid">
          <div className="om-stat-card">
            <span className="stat-number">98%+</span>
            <span className="stat-label">Locomotive Uptime Target</span>
          </div>
          <div className="om-stat-card">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Dedicated On-Site Support</span>
          </div>
          <div className="om-stat-card">
            <span className="stat-number">Zero</span>
            <span className="stat-label">Capital Overhead for Crews</span>
          </div>
        </div>
      </section>

      {/* Interactive Operational Scope Section */}
      <section className="om-scope-section">
        <div className="section-title-center">
          <h2>What Turnkey O&M Covers</h2>
          <p>Click below to explore each core pillar of our contract delivery</p>
        </div>

        <div className="om-tabs-container">
          <button 
            className={`om-tab-btn ${activeScope === 'operations' ? 'active' : ''}`}
            onClick={() => setActiveScope('operations')}
          >
            🕹️ Train Operations
          </button>
          <button 
            className={`om-tab-btn ${activeScope === 'maintenance' ? 'active' : ''}`}
            onClick={() => setActiveScope('maintenance')}
          >
            🛠️ Full Maintenance
          </button>
          <button 
            className={`om-tab-btn ${activeScope === 'compliance' ? 'active' : ''}`}
            onClick={() => setActiveScope('compliance')}
          >
            📋 Safety & Reporting
          </button>
        </div>

        <div className="om-scope-card">
          <div className="om-scope-image-wrapper">
            <img src={omScopeData[activeScope].image} alt={omScopeData[activeScope].title} />
          </div>
          <div className="om-scope-details">
            <h3>{omScopeData[activeScope].title}</h3>
            <p className="om-scope-desc">{omScopeData[activeScope].description}</p>
            <ul className="om-points-list">
              {omScopeData[activeScope].points.map((pt, idx) => (
                <li key={idx}>
                  <span className="check-icon">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Scope Matrix: AMC vs O&M */}
      <section className="matrix-section">
        <div className="section-title-center">
          <h2>AMC vs. Turnkey O&M Scope</h2>
          <p>Choosing the right engagement model for your facility</p>
        </div>

        <div className="table-responsive">
          <table className="om-comparison-table">
            <thead>
              <tr>
                <th>Service Deliverable</th>
                <th>Standard AMC Contract</th>
                <th className="highlight-column">Turnkey O&M Contract</th>
              </tr>
            </thead>
            <tbody>
              {matrixData.map((row, idx) => (
                <tr key={idx}>
                  <td className="feature-name">{row.feature}</td>
                  <td>{row.amc}</td>
                  <td className="highlight-column">{row.om}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="om-cta-banner">
        <div className="cta-content">
          <h2>Ready to Streamline Your Locomotive Yard Operations?</h2>
          <p>
            Let our operational team assess your monthly tonnage requirements, track geometry, and fleet needs for a customized contract proposal.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Request Turnkey Proposal</Link>
            <Link to="/services" className="btn-secondary-outline">View Other Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OM;