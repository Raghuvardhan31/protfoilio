import React, { useState } from 'react';
import './Services.css';

export default function Services() {
  const [demoModal, setDemoModal] = useState(false);

  const features = [
    {
      icon: '📊',
      title: 'Performance Monitoring',
      description: 'Track your website performance and user analytics in real-time with detailed insights.'
    },
    {
      icon: '🛡️',
      title: 'Technical Support',
      description: '24/7 dedicated support team to assist with any technical issues or questions.'
    },
    {
      icon: '🔧',
      title: 'Maintenance & Updates',
      description: 'Regular updates and maintenance to keep your site secure and running smoothly.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Standard Plan',
      description: 'Perfect for startups',
      price: '$499',
      period: '/month',
      features: [
        'Up to 50 Pages',
        'Basic SEO Optimization',
        'Email Support',
        'Monthly Maintenance',
        'Performance Reports'
      ],
      isPopular: false
    },
    {
      name: 'Professional Plan',
      description: 'Ideal for growing businesses',
      price: '$999',
      period: '/month',
      features: [
        'Up to 200 Pages',
        'Advanced SEO Optimization',
        'Priority Support',
        'Weekly Maintenance',
        'Advanced Analytics',
        'Free Demo Training'
      ],
      isPopular: true
    },
    {
      name: 'Premium Plan',
      description: 'For enterprise solutions',
      price: '$1,999',
      period: '/month',
      features: [
        'Unlimited Pages',
        'Premium SEO Optimization',
        'Dedicated Account Manager',
        'Daily Maintenance',
        'Custom Development',
        'Yearly Consultation Included'
      ],
      isPopular: false
    }
  ];

  return (
    <div className="services-container">
      {/* Header */}
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Comprehensive solutions designed to help your business grow and succeed online with cutting-edge technology and support.</p>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="pricing-section">
        <div className="pricing-title">
          <h2>Pricing Plans</h2>
          <p>Choose the perfect plan for your business needs</p>
        </div>

        <div className="pricing-cards">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.isPopular ? 'featured' : ''}`}>
              {plan.isPopular && <div className="pricing-badge">Most Popular</div>}
              
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>

              <div className="price-display">
                <div className="price-amount">{plan.price}</div>
                <div className="price-period">{plan.period}</div>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <button 
                className={`demo-btn ${!plan.isPopular ? 'outlined' : ''}`}
                onClick={() => setDemoModal(true)}
              >
                Request Free Demo
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <div className="trust-section">
        <h3>Why Choose Us?</h3>
        <p className="trust-message">
          We provide <span className="highlight">transparent pricing</span>, <span className="highlight">yearly support</span>, 
          and <span className="highlight">proven results</span>. With our dedicated team and proven track record, 
          your business will thrive online. Start with a <span className="highlight">free demo</span> today!
        </p>
      </div>
    </div>
  );
}
