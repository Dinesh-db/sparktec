import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Product.css";

const Product = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const productCategories = [
    {
      id: 'engine',
      name: 'Engine & Mechanical Parts',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      items: [
        'Engine Spares',
        'Filters',
        'Pumps',
        'Belts',
        'Hoses',
        'Bearings',
        'Mountings',
        'Cooling System Components',
        'Fuel System Components'
      ]
    },
    {
      id: 'electrical',
      name: 'Electrical & Electronic Parts',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      items: [
        'Alternators',
        'Starter Motors',
        'Batteries',
        'Relays',
        'Contactors',
        'Sensors',
        'Switches',
        'RPM Meters',
        'Electrical Protection Devices',
        'Control Panels',
        'Display Units'
      ]
    },
    {
      id: 'pneumatic',
      name: 'Pneumatic & Brake Components',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      items: [
        'Brake Valves',
        'Distributor Valves',
        'Air Valves',
        'Pneumatic Cylinders',
        'Air Hoses',
        'Pressure Switches',
        'Air Compressor Components'
      ]
    },
    {
      id: 'hydraulic',
      name: 'Hydraulic Components',
      image: 'https://hydraproducts.co.uk/wp-content/uploads/2022/04/hydraulic-valves-new.jpg',
      items: [
        'Hydraulic Pumps',
        'Hydraulic Valves',
        'Hydraulic Cylinders',
        'Hydraulic Hoses',
        'Filters',
        'Fittings',
        'Hydraulic Accessories'
      ]
    },
    {
      id: 'other',
      name: 'Gearbox & Other Components',
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80',
      items: [
        'Gearbox Components',
        'Couplings',
        'Shock Absorbers',
        'Locomotive Lighting',
        'Cables and Connectors',
        'Fasteners',
        'Workshop Consumables'
      ]
    }
  ];

  // Filter categories by active tab & search input
  const filteredCategories = productCategories
    .filter(cat => activeTab === 'all' || cat.id === activeTab)
    .map(cat => ({
      ...cat,
      items: cat.items.filter(item => 
        item.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(cat => cat.items.length > 0);

  return (
    <div className="products-container">
      {/* Header / Hero Section */}
      <section className="products-header">
        <div className="header-badge">Catalog & Inventory</div>
        <h1>Locomotive Spare Parts</h1>
        <p className="header-lead">
          We supply a comprehensive range of genuine and high-performance spare parts for diesel and industrial locomotives.
        </p>

        {/* Search Bar & Action */}
        <div className="catalog-actions">
          <input
            type="text"
            className="parts-search-input"
            placeholder="Search parts (e.g. Valves, Pumps, Alternators)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="download-btn">📥 Download Specs Sheet</button>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="filter-section">
        <div className="filter-container">
          <button 
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Parts
          </button>
          {productCategories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Product Category Grid */}
      <section className="products-grid-section">
        <div className="products-grid">
          {filteredCategories.map((category, index) => (
            <div key={index} className="product-category-card">
              <div className="card-image-wrapper">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="category-card-image" 
                />
                <span className="category-code">CAT-0{index + 1}</span>
              </div>

              <div className="card-body">
                <h2>{category.name}</h2>
                <ul className="parts-list">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="part-item">
                      <span className="part-bullet">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-footer-cta">
                <Link to="/contact" className="inquire-link">
                  Request Quote for Parts &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Requirements Banner */}
      <section className="custom-parts-banner">
        <div className="banner-content">
          <h2>Looking for Specific or Hard-to-Find Locomotive Spares?</h2>
          <p>
            We help source and deliver precise mechanical, electrical, pneumatic, and hydraulic spares tailored to your specific locomotive model.
          </p>
          <Link to="/contact" className="btn-primary">Send Part Specifications</Link>
        </div>
      </section>
    </div>
  );
};

export default Product;