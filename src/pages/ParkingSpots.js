import React, { useState } from "react";
import { motion } from "framer-motion";
import { sharedStyles } from "../styles/SharedStyles";
import { FaParking, FaClock, FaWalking, FaInfoCircle } from 'react-icons/fa';

function ParkingSpots() {
  const [parkingSpots] = useState([
    {
      id: 1,
      location: "Music Row",
      address: "1234 Music Square E",
      availableSpots: 15,
      walkingDistance: "5 min",
      restrictions: "Free after 6 PM",
      type: "Street Parking"
    },
    {
      id: 2,
      location: "Downtown Nashville",
      address: "500 Broadway",
      availableSpots: 25,
      walkingDistance: "8 min",
      restrictions: "Free on Sundays",
      type: "Public Lot"
    },
    {
      id: 3,
      location: "The Gulch",
      address: "123 11th Ave S",
      availableSpots: 30,
      walkingDistance: "3 min",
      restrictions: "Free after 7 PM",
      type: "Garage"
    }
  ]);

  const spotCardStyle = {
    background: 'var(--pure-white)',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '15px',
    boxShadow: 'var(--shadow-md)',
    border: '1px solid var(--gray-200)'
  };

  const badgeStyle = {
    background: 'var(--primary-blue)',
    color: 'var(--pure-white)',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '0.8rem',
    display: 'inline-block',
    marginRight: '8px'
  };

  return (
    <div style={sharedStyles.pageContainer}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={sharedStyles.contentCard}
      >
        <h1 style={sharedStyles.pageTitle}>
          <FaParking style={{ marginRight: '10px' }} />
          Free Parking Spots Nearby
        </h1>

        <div style={{ marginBottom: '20px' }}>
          <div style={{
            padding: '15px',
            background: 'var(--off-white)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <FaInfoCircle color="var(--primary-blue)" />
            <span>Showing available parking spots near your location</span>
          </div>
        </div>

        {parkingSpots.map(spot => (
          <motion.div
            key={spot.id}
            style={spotCardStyle}
            whileHover={{ scale: 1.02 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ color: 'var(--primary-blue)', marginBottom: '8px' }}>
                  {spot.location}
                </h3>
                <p style={{ color: 'var(--gray-500)', marginBottom: '8px' }}>
                  {spot.address}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <FaParking />
                    {spot.availableSpots} spots
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <FaWalking />
                    {spot.walkingDistance}
                  </span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={badgeStyle}>{spot.type}</span>
              </div>
            </div>
            <div style={{ 
              marginTop: '10px',
              padding: '8px',
              background: 'var(--off-white)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <FaClock size={14} />
              <span style={{ fontSize: '0.9rem' }}>{spot.restrictions}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ParkingSpots; 