import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCar, FaHandsHelping, FaExclamationCircle, FaParking, FaBus, FaWalking, FaMedal, FaLeaf, FaBicycle, FaRoute, FaUsers, FaMoneyBillWave } from 'react-icons/fa';
import Logo from '../assets/Logo.png';  // Adjust the path based on your actual logo location

function LandingPage() {
  const navigate = useNavigate();

  const handleRequestRide = () => navigate("/ride-request");
  const handleVolunteerRide = () => navigate("/Volunteering");

  const pageStyle = {
    position: 'relative',
    minHeight: '100vh',
    background: 'var(--nashville-night)',
    color: 'var(--pure-white)',
    overflow: 'hidden'
  };

  const cityLightsStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 30%, rgba(255, 184, 0, 0.15) 0%, transparent 30%),
      radial-gradient(circle at 80% 40%, rgba(0, 229, 255, 0.1) 0%, transparent 30%),
      radial-gradient(circle at 40% 60%, rgba(157, 78, 221, 0.1) 0%, transparent 30%),
      radial-gradient(circle at 70% 70%, rgba(255, 51, 102, 0.1) 0%, transparent 30%)
    `,
    animation: 'twinkle 4s infinite',
    pointerEvents: 'none',
    zIndex: 1
  };

  const backgroundStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: 'auto',
    opacity: '0.03',
    pointerEvents: 'none',
    zIndex: 0
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    padding: '10px',
    background: 'transparent',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '10px',
    color: 'var(--pure-white)',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
  };

  const h1Style = {
    fontSize: '1.6rem',
    marginBottom: '6px',
    color: 'var(--pure-white)',
    fontWeight: 'bold'
  };

  const subheaderStyle = {
    fontSize: '1rem',
    opacity: 0.9,
    color: 'var(--pure-white)'
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    maxWidth: '650px',
    margin: '0 auto'
  };

  const cardStyle = {
    background: 'rgba(26, 27, 37, 0.8)',
    backdropFilter: 'blur(10px)',
    padding: '8px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: 'var(--neon-glow)',
    maxWidth: '150px',
    width: '100%',
    transition: 'all 0.3s ease',
    border: `1px solid var(--music-gold)`,
    color: 'var(--pure-white)',
    minHeight: '150px',
    fontSize: '0.9rem'
  };

  const iconStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: 'var(--primary-blue)'
  };

  const buttonStyle = {
    background: 'var(--gradient-stage)',
    color: 'var(--pure-white)',
    padding: '8px 15px',
    borderRadius: '20px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    justifyContent: 'center',
    width: '100%',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: 'var(--gold-glow)'
  };

  // First define the base utility card style
  const utilityCardStyle = {
    background: 'rgba(26, 27, 37, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '5px 10px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 20px rgba(255, 184, 0, 0.1)',
    border: '1px solid var(--music-gold)',
    position: 'relative',
    minWidth: '150px',
    flex: '0 0 auto',
    transform: 'translateZ(0)',
    color: 'var(--pure-white)',
    fontSize: '0.85rem'
  };

  // Then use it in other style definitions
  const utilityCardsContainerStyle = {
    position: 'fixed',
    top: '80px',
    right: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    zIndex: 1000,
    maxHeight: 'calc(100vh - 100px)',
    overflowY: 'auto',
    padding: '5px',
    '&::-webkit-scrollbar': {
      width: '5px'
    },
    '&::-webkit-scrollbar-track': {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'var(--music-gold)',
      borderRadius: '10px'
    }
  };

  // Remove the circular reference in the style definition
  const enhancedUtilityCardStyle = {
    ...utilityCardStyle,
    // Add any additional styles here
  };

  const cardBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.15,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1
  };

  const utilityIconStyle = {
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '10px',
    color: 'var(--music-gold)',
    filter: 'drop-shadow(0 0 5px var(--music-gold))'
  };

  const utilityTextStyle = {
    fontSize: '14px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    color: 'var(--pure-white)',
    textShadow: '0 0 10px rgba(255, 184, 0, 0.3)'
  };

  const mediaQuery = window.matchMedia('(max-width: 768px)');
  if (mediaQuery.matches) {
    utilityCardsContainerStyle.position = 'static';
    utilityCardsContainerStyle.flexDirection = 'row';
    utilityCardsContainerStyle.justifyContent = 'center';
    utilityCardsContainerStyle.margin = '20px 0';
  }

  const smallCardStyle = {
    ...cardStyle,
    maxWidth: '250px',
    padding: '20px',
    minHeight: '150px'
  };

  const rewardsCardStyle = {
    ...cardStyle,
    maxWidth: '200px',
    padding: '12px',
    minHeight: '120px'
  };

  const sectionSpacing = {
    marginTop: '12px'
  };

  // Update the floating rewards position to left side
  const floatingRewardsStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '20px', // Changed from right to left
    background: 'rgba(26, 27, 37, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '15px',
    borderRadius: '15px',
    border: '2px solid var(--music-gold)',
    boxShadow: 'var(--neon-glow)',
    maxWidth: '200px',
    color: 'var(--pure-white)',
    zIndex: 1000,
    animation: 'float 6s ease-in-out infinite'
  };

  // Update the rewards section to be more compact
  const rewardsSection = (
    <motion.div
      style={floatingRewardsStyle}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        marginBottom: '10px'
      }}>
        <FaLeaf style={{ color: 'var(--music-gold)', fontSize: '18px' }} />
        <h3 style={{ 
          color: 'var(--music-gold)',
          fontSize: '1rem',
          margin: 0
        }}>
          Eco Rewards
        </h3>
      </div>

      <div style={{
        background: 'rgba(255, 184, 0, 0.1)',
        padding: '8px',
        borderRadius: '8px',
        marginBottom: '8px'
      }}>
        <p style={{ 
          fontSize: '0.9rem', 
          marginBottom: '5px',
          color: 'var(--music-gold)'
        }}>
          Your Points: 150
        </p>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '5px',
          fontSize: '0.8rem'
        }}>
          <FaBus style={{ color: 'var(--neon-blue)' }} />
          <span>+50 pts per transit ride</span>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '5px',
          fontSize: '0.8rem'
        }}>
          <FaBicycle style={{ color: 'var(--neon-blue)' }} />
          <span>+30 pts per bike ride</span>
        </div>
      </div>

      <motion.button
        style={{
          background: 'var(--gradient-stage)',
          color: 'var(--pure-white)',
          padding: '6px 12px',
          borderRadius: '20px',
          border: 'none',
          fontSize: '0.8rem',
          width: '100%',
          cursor: 'pointer'
        }}
        whileHover={{ transform: 'translateY(-2px)' }}
        onClick={() => navigate('/rewards')}
      >
        View Rewards
      </motion.button>
    </motion.div>
  );

  // Add this new style for music-themed icons
  const musicIconStyle = {
    color: 'var(--music-gold)',
    fontSize: '22px',
    filter: 'drop-shadow(0 0 8px var(--music-gold))',
    marginBottom: '6px'
  };

  const transitCardStyle = {
    ...smallCardStyle,
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '130px',
    padding: '10px',
    background: 'rgba(26, 27, 37, 0.95)',
    border: '2px solid var(--music-gold)',
    boxShadow: `
      0 0 20px rgba(255, 184, 0, 0.2),
      inset 0 0 20px rgba(255, 184, 0, 0.1)
    `,
    maxWidth: '170px',
    fontSize: '0.9rem'
  };

  const pointsBadgeStyle = {
    position: 'absolute',
    top: '3px',
    right: '3px',
    background: 'var(--gradient-stage)',
    color: 'var(--pure-white)',
    padding: '3px 6px',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    boxShadow: '0 0 15px rgba(255, 184, 0, 0.3)',
    border: '1px solid rgba(255, 184, 0, 0.5)',
    animation: 'pulse 2s infinite'
  };

  const balanceContainerStyle = {
    background: 'rgba(255, 184, 0, 0.15)',
    padding: '6px',
    borderRadius: '8px',
    marginBottom: '6px',
    border: '1px solid rgba(255, 184, 0, 0.3)',
    boxShadow: '0 0 10px rgba(255, 184, 0, 0.1)'
  };

  const redeemButtonStyle = {
    background: 'linear-gradient(45deg, var(--guitar-red), var(--music-gold))',
    color: 'var(--pure-white)',
    padding: '5px 10px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '0.75rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 0 15px rgba(255, 184, 0, 0.2)',
    marginTop: '6px',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 0 20px rgba(255, 184, 0, 0.4)'
    }
  };

  const transitSection = (
    <div style={{ ...cardContainerStyle, ...sectionSpacing }}>
      <motion.div
        style={transitCardStyle}
        whileHover={{ transform: 'translateY(-5px)' }}
        onClick={() => navigate('/public-transit')}
      >
        <div style={pointsBadgeStyle}>+50 pts/ride</div>
        <FaBus style={{ ...musicIconStyle, fontSize: '32px' }} />
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--music-gold)' }}>
          Public Transit
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--pure-white)', marginBottom: '15px' }}>
          Real-time WeGo bus tracking
        </p>
        <div style={{ 
          background: balanceContainerStyle.background,
          padding: balanceContainerStyle.padding,
          borderRadius: balanceContainerStyle.borderRadius,
          marginBottom: balanceContainerStyle.marginBottom,
          border: balanceContainerStyle.border,
          boxShadow: balanceContainerStyle.boxShadow
        }}>
          <p style={{ 
            color: 'var(--music-gold)', 
            fontSize: '1.1rem',
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>
            Current Balance: 150 pts
          </p>
          <p style={{ 
            color: 'var(--neon-blue)', 
            fontSize: '0.9rem',
            opacity: 0.9
          }}>
            Next Free Ride: 350 pts more
          </p>
        </div>
        <motion.button
          style={redeemButtonStyle}
          whileHover={{ transform: 'translateY(-2px)' }}
          onClick={(e) => {
            e.stopPropagation();
            navigate('/rewards');
          }}
        >
          Redeem Rewards
        </motion.button>
      </motion.div>

      <motion.div
        style={transitCardStyle}
        whileHover={{ transform: 'translateY(-5px)' }}
        onClick={() => navigate('/micro-mobility')}
      >
        <div style={pointsBadgeStyle}>+30 pts/ride</div>
        <FaBicycle style={{ ...musicIconStyle, fontSize: '32px' }} />
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--music-gold)' }}>
          Micro-Mobility
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--pure-white)', marginBottom: '15px' }}>
          Scooters & bike-sharing
        </p>
        <div style={{ 
          background: balanceContainerStyle.background,
          padding: balanceContainerStyle.padding,
          borderRadius: balanceContainerStyle.borderRadius,
          marginBottom: balanceContainerStyle.marginBottom,
          border: balanceContainerStyle.border,
          boxShadow: balanceContainerStyle.boxShadow
        }}>
          <p style={{ 
            color: 'var(--music-gold)', 
            fontSize: '1.1rem',
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>
            Current Balance: 150 pts
          </p>
          <p style={{ 
            color: 'var(--neon-blue)', 
            fontSize: '0.9rem',
            opacity: 0.9
          }}>
            Next Free Scooter: 150 pts more
          </p>
        </div>
        <motion.button
          style={redeemButtonStyle}
          whileHover={{ transform: 'translateY(-2px)' }}
          onClick={(e) => {
            e.stopPropagation();
            navigate('/rewards');
          }}
        >
          Redeem Rewards
        </motion.button>
      </motion.div>

      <motion.div
        style={transitCardStyle}
        whileHover={{ transform: 'translateY(-5px)' }}
        onClick={() => navigate('/smart-payments')}
      >
        <div style={pointsBadgeStyle}>Smart Wallet</div>
        <FaMoneyBillWave style={{ ...musicIconStyle, fontSize: '32px' }} />
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--music-gold)' }}>
          Smart Payments
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--pure-white)', marginBottom: '15px' }}>
          One app for all transit modes
        </p>
        <div style={{ 
          background: balanceContainerStyle.background,
          padding: balanceContainerStyle.padding,
          borderRadius: balanceContainerStyle.borderRadius,
          marginBottom: balanceContainerStyle.marginBottom,
          border: balanceContainerStyle.border,
          boxShadow: balanceContainerStyle.boxShadow
        }}>
          <p style={{ 
            color: 'var(--music-gold)', 
            fontSize: '1.1rem',
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>
            Available Credits: $25
          </p>
          <p style={{ 
            color: 'var(--neon-blue)', 
            fontSize: '0.9rem',
            opacity: 0.9
          }}>
            Convert 500 pts to $5 credit
          </p>
        </div>
        <motion.button
          style={redeemButtonStyle}
          whileHover={{ transform: 'translateY(-2px)' }}
          onClick={(e) => {
            e.stopPropagation();
            navigate('/rewards');
          }}
        >
          Manage Wallet
        </motion.button>
      </motion.div>
    </div>
  );

  return (
    <div style={pageStyle}>
      <div style={cityLightsStyle} />
      {/* <img src={Logo} alt="" style={backgroundStyle} className="background-logo" /> */}
      <div style={contentStyle}>
        <motion.div
          style={headerStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={h1Style}><b> NashConnect:</b>FOR NASHVILLE TRANSPORTATION </h1>
          <p style={subheaderStyle}>Smart & Community-Driven Mobility</p>
        </motion.div>

        <div style={cardContainerStyle}>
          <motion.div
            style={cardStyle}
            whileHover={{ transform: 'translateY(-10px)' }}
          >
            <FaRoute style={iconStyle} />
            <h2 style={{ color: 'var(--primary-blue)', marginBottom: '15px' }}>
              Smart Route Planning
            </h2>
            <p style={{ marginBottom: '20px', color: 'var(--gray-500)' }}>
              AI-powered transportation matching for the fastest, cheapest, and most eco-friendly routes
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '10px',
              marginBottom: '15px'
            }}>
              <span style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '5px',
                fontSize: '0.8rem',
                color: 'var(--music-gold)'
              }}>
                <FaLeaf size={12} />
                Eco-Friendly
              </span>
              <span style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '5px',
                fontSize: '0.8rem',
                color: 'var(--music-gold)'
              }}>
                <FaCar size={12} />
                Less Traffic
              </span>
            </div>
            <motion.button
              onClick={() => navigate("/smart-routing")}
              style={buttonStyle}
              whileHover={{ transform: 'translateY(-2px)' }}
            >
              Plan Your Journey
            </motion.button>
          </motion.div>

          <motion.div
            style={cardStyle}
            whileHover={{ transform: 'translateY(-10px)' }}
          >
            <FaCar style={iconStyle} />
            <h2 style={{ color: 'var(--primary-blue)', marginBottom: '20px' }}>
              Need a Ride?
            </h2>
            <p style={{ marginBottom: '30px', color: 'var(--gray-500)' }}>
              Connect with volunteer drivers in your area for community-based transportation
            </p>
            <motion.button
              onClick={handleRequestRide}
              style={buttonStyle}
              whileHover={{ transform: 'translateY(-2px)' }}
            >
              Request a Ride
            </motion.button>
          </motion.div>

          <motion.div
            style={cardStyle}
            whileHover={{ transform: 'translateY(-10px)' }}
          >
            <FaHandsHelping style={iconStyle} />
            <h2 style={{ color: 'var(--primary-blue)', marginBottom: '20px' }}>
              Want to Help?
            </h2>
            <p style={{ marginBottom: '30px', color: 'var(--gray-500)' }}>
              Make a difference by becoming a volunteer driver in your community
            </p>
            <motion.button
              onClick={handleVolunteerRide}
              style={buttonStyle}
              whileHover={{ transform: 'translateY(-2px)' }}
            >
              Become a Driver
            </motion.button>
          </motion.div>
        </div>

        <div style={{ ...cardContainerStyle, ...sectionSpacing }}>
          {transitSection}
        </div>

        <div style={{ ...sectionSpacing }}>
          {rewardsSection}
        </div>
      </div>

      <div style={utilityCardsContainerStyle}>
        <div style={{ padding: '2px' }}>
          <motion.div
            style={{
              ...utilityCardStyle,
              background: 'linear-gradient(135deg, rgba(255, 51, 102, 0.95), rgba(255, 184, 0, 0.95))',
              border: '2px solid var(--music-gold)'
            }}
            onClick={() => navigate('/emergency')}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(255, 184, 0, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            className="card-hover"
          >
            <span style={{
              ...utilityIconStyle,
              color: 'var(--pure-white)',
              background: 'rgba(255, 255, 255, 0.2)'
            }}>
              <FaExclamationCircle />
            </span>
            <span style={{
              ...utilityTextStyle,
              color: 'var(--pure-white)'
            }}>
              Nashville Weather
            </span>
          </motion.div>
        </div>

        <div style={{ padding: '2px' }}>
          <motion.div
            style={{
              ...utilityCardStyle,
              background: 'linear-gradient(135deg, var(--neon-blue), var(--stage-purple))',
              border: '2px solid var(--neon-blue)'
            }}
            onClick={() => navigate('/parking')}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(0, 229, 255, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            className="card-hover"
          >
            <span style={{
              ...utilityIconStyle,
              color: 'var(--pure-white)',
              background: 'rgba(255, 255, 255, 0.2)'
            }}>
              <FaParking />
            </span>
            <span style={{
              ...utilityTextStyle,
              color: 'var(--pure-white)'
            }}>
              Downtown Parking
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
