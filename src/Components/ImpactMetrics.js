import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaUsers, FaCar, FaTree } from 'react-icons/fa';

function ImpactMetrics() {
  const metrics = {
    co2Saved: 125.5,
    communityRides: 50,
    carpoolsJoined: 30,
    treesWorth: 8
  };

  const metricCardStyle = {
    background: 'var(--pure-white)',
    borderRadius: '15px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: 'var(--shadow-md)'
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
      <motion.div
        style={metricCardStyle}
        whileHover={{ scale: 1.05 }}
      >
        <FaLeaf style={{ fontSize: '2rem', color: 'var(--star-gold)' }} />
        <h3>{metrics.co2Saved}kg</h3>
        <p>CO₂ Saved</p>
      </motion.div>

      <motion.div
        style={metricCardStyle}
        whileHover={{ scale: 1.05 }}
      >
        <FaUsers style={{ fontSize: '2rem', color: 'var(--primary-blue)' }} />
        <h3>{metrics.communityRides}</h3>
        <p>Community Rides</p>
      </motion.div>

      {/* Add more metric cards */}
    </div>
  );
}

export default ImpactMetrics; 