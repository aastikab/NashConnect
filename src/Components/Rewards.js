import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaBus, FaWalking, FaGift, FaCar } from 'react-icons/fa';
import { sharedStyles } from '../styles/SharedStyles';

function Rewards() {
  const [points, setPoints] = useState(150); // Example starting points
  const [availableRewards] = useState([
    {
      id: 1,
      name: 'Free Ride',
      points: 500,
      icon: <FaCar />,
      description: 'Get a free ride to your next Impact location'
    },
    {
      id: 2,
      name: 'Bus Pass',
      points: 300,
      icon: <FaBus />,
      description: 'One-day public transit pass'
    },
    {
      id: 3,
      name: 'Walk Champion',
      points: 1000,
      icon: <FaMedal />,
      description: 'Special badge and premium rewards access'
    }
  ]);

  const rewardCardStyle = {
    background: 'var(--pure-white)',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    boxShadow: 'var(--shadow-md)',
    transition: 'all 0.3s ease'
  };

  const pointsBadgeStyle = {
    background: 'var(--gradient-primary)',
    color: 'var(--pure-white)',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  };

  return (
    <div style={sharedStyles.pageContainer}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={sharedStyles.contentCard}
      >
        <h1 style={sharedStyles.pageTitle}>
          <FaGift style={{ marginRight: '10px' }} />
          Your Rewards
        </h1>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={pointsBadgeStyle}>
            {points} Points Available
          </div>
        </div>

        <div>
          {availableRewards.map(reward => (
            <motion.div
              key={reward.id}
              style={rewardCardStyle}
              whileHover={{ transform: 'translateY(-5px)' }}
            >
              <div style={{ 
                fontSize: '2rem', 
                color: 'var(--primary-blue)' 
              }}>
                {reward.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: 'var(--primary-blue)' }}>
                  {reward.name}
                </h3>
                <p style={{ color: 'var(--gray-500)' }}>
                  {reward.description}
                </p>
              </div>
              <button
                style={{
                  ...sharedStyles.primaryButton,
                  opacity: points >= reward.points ? 1 : 0.5
                }}
                disabled={points < reward.points}
              >
                Redeem ({reward.points} pts)
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Rewards; 