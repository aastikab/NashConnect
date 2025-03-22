import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBus, FaCar, FaBicycle, FaWalking, FaLeaf, FaClock, FaDollarSign } from 'react-icons/fa';

function SmartRouting() {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);

  const mockRoutes = [
    {
      id: 1,
      type: 'multimodal',
      segments: [
        { mode: 'scooter', duration: 10, cost: 2.50, icon: FaBicycle },
        { mode: 'bus', duration: 25, cost: 2.00, icon: FaBus },
        { mode: 'carpool', duration: 15, cost: 5.00, icon: FaCar }
      ],
      totalDuration: 50,
      totalCost: 9.50,
      co2Saved: 2.5,
      ecoScore: 85
    },
    // Add more route options...
  ];

  const routeCardStyle = {
    background: 'var(--pure-white)',
    borderRadius: '15px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: 'var(--shadow-md)',
    cursor: 'pointer',
    border: '2px solid transparent',
    transition: 'all 0.3s ease'
  };

  const segmentStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    background: 'var(--off-white)',
    borderRadius: '8px',
    marginBottom: '10px'
  };

  return (
    <div className="smart-routing">
      <h2>Smart Route Suggestions</h2>
      
      {mockRoutes.map(route => (
        <motion.div
          key={route.id}
          style={{
            ...routeCardStyle,
            border: selectedRoute?.id === route.id ? '2px solid var(--star-gold)' : '2px solid transparent'
          }}
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelectedRoute(route)}
        >
          <div className="route-segments">
            {route.segments.map((segment, index) => (
              <div key={index} style={segmentStyle}>
                <segment.icon size={24} />
                <span>{segment.mode}</span>
                <FaClock /> {segment.duration} min
                <FaDollarSign /> {segment.cost.toFixed(2)}
              </div>
            ))}
          </div>
          
          <div className="route-stats" style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between' }}>
            <span><FaClock /> Total: {route.totalDuration} min</span>
            <span><FaDollarSign /> {route.totalCost.toFixed(2)}</span>
            <span><FaLeaf /> {route.co2Saved}kg CO₂ saved</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default SmartRouting; 