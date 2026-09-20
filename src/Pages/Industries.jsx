import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Industries.css';

const Industries = () => {
  const industrySectors = [
    {
      id: 'steel-plants',
      title: 'Steel & Metallurgical Plants',
      tagline: 'High-Temperature & Heavy-Duty Operations',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      description: 'Continuous, high-load movement of hot metal ladles, raw scrap, and finished steel products across internal plant rail networks under extreme heat and ambient dust conditions.',
      applications: [
        'Torpedo ladle car shunting',
        'Raw material track movement (Iron ore & Coal)',
        'Slag transport & heavy ingot handling',
        '24/7 continuous duty cycle operations'
      ],
      recommendedFleet: '400 HP – 1400 HP Broad/Standard Gauge Diesel Locomotives'
    },
    {
      id: 'mining-minerals',
      title: 'Mining & Mineral Extraction',
      tagline: 'Rugged Performance on Steep Gradients',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
      description: 'Reliable haulage for bulk mineral extraction sites, crushers, and loading hoppers operating over unpaved tracks, tight curvature, and steep incline gradients.',
      applications: [
        'Bulk ore rake movement to loading silos',
        'Overburden dumping and quarry transport',
        'Heavy incline tractive effort hauling',
        'Dust-sealed pneumatic braking applications'
      ],
      recommendedFleet: '600 HP – 1000 HP Heavy Tractive Shunting Locomotives'
    },
    {
      id: 'cement-plants',
      title: 'Cement & Building Materials',
      tagline: 'Dust-Resistant & Reliable Rake Shunting',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      description: 'Precision positioning of clinker, limestone, and bagged cement rakes inside packing plants, silos, and main line siding interfaces.',
      applications: [
        'Limestone unloading hopper shunting',
        'Clinker rake interchange with main line rail',
        'Precision slow-speed indexing for wagon loaders',
        'Heavy particulate filter protected operations'
      ],
      recommendedFleet: '350 HP – 800 HP Hydraulic & Diesel Shunters'
    },
    {
      id: 'ports-logistics',
      title: 'Ports & Inland Container Depots',
      tagline: 'Fast Rake Turnaround & Intermodal Freight',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      description: 'High-frequency switching and transfer of container flat wagons, bulk grain hoppers, and liquid cargo tank rakes to minimize vessel and terminal idle times.',
      applications: [
        'Port siding to main track rake exchange',
        'Container yard rake switching and marshalling',
        'Multi-wagon indexing for rapid loading cranes',
        'High brake air supply capacity for long rakes'
      ],
      recommendedFleet: '800 HP – 1400 HP High-Capacity Shunting Units'
    },
    {
      id: 'power-thermal',
      title: 'Thermal Power Stations',
      tagline: 'Uninterrupted Coal Handling Operations',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
      description: 'Critical movement of coal BOBRN wagon rakes through wagon tipplers, track hoppers, and bottom-discharge unloader pits with maximum reliability.',
      applications: [
        'Wagon tippler precise indexing & shunting',
        'Track hopper slow-speed discharge runs',
        'Full rake movement from main siding',
        '24/7 continuous fuel supply reliability'
      ],
      recommendedFleet: '650 HP – 1200 HP Heavy-Duty Diesel Locomotives'
    },
    {
      id: 'chemical-refining',
      title: 'Chemicals & Oil Refineries',
      tagline: 'Spark-Proof & Flameproof Yard Shunting',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      description: 'Safely handling hazardous liquid chemicals and petroleum tank rakes with flameproof exhaust systems and specialized safety interlocks.',
      applications: [
        'Petroleum tank wagon array positioning',
        'Hazardous chemical siding shunting',
        'Spark-arrested exhaust operation',
        'Fail-safe pneumatic emergency braking'
      ],
      recommendedFleet: 'Ex-proof / Flameproof Modified Diesel Locomotives'
    }
  ];

  return (
    <div className="industries-container">
      {/* Header Section */}
      <section className="industries-header">
        <div className="header-badge">Industrial Applications</div>
        <h1>Powering Heavy Industry Rail Networks</h1>
        <p className="header-lead">
          Purpose-engineered locomotives, dedicated O&M teams, and specialized maintenance contracts tailored for the unique operating demands of major industrial sectors.
        </p>
      </section>

      {/* Grid Section */}
      <section className="industries-grid-section">
        <div className="industries-grid">
          {industrySectors.map((sector) => (
            <div key={sector.id} className="industry-card">
              <div className="card-image-wrapper">
                <img src={sector.image} alt={sector.title} />
                <div className="card-badge">{sector.tagline}</div>
              </div>

              <div className="card-content">
                <h2>{sector.title}</h2>
                <p className="card-desc">{sector.description}</p>

                <div className="applications-box">
                  <h3>Key Applications:</h3>
                  <ul>
                    {sector.applications.map((app, idx) => (
                      <li key={idx}>
                        <span className="bullet">▸</span> {app}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="recommended-box">
                  <span className="rec-label">Recommended Class:</span>
                  <span className="rec-value">{sector.recommendedFleet}</span>
                </div>

                <Link to="/contact" className="industry-btn">
                  Consult for {sector.title.split(' ')[0]} Siding &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Solution Callout */}
      <section className="industries-cta-banner">
        <div className="cta-content">
          <h2>Operating in a Custom or Niche Industry?</h2>
          <p>
            We engineer customized gauge configurations, axle weight distributions, and tractive effort specs tailored to private sidings and unique rail topologies.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Request Custom Engineering Assessment</Link>
            <Link to="/product" className="btn-secondary-outline">Explore Locomotive Fleet</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;