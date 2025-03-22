import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaCloudRain, FaSnowflake, FaWind, FaSun, FaThermometerHalf } from 'react-icons/fa';

function Emergency() {
  const [weatherAlerts, setWeatherAlerts] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({
    temperature: '75°F',
    condition: 'Partly Cloudy',
    feelsLike: '78°F',
    humidity: '65%',
    windSpeed: '10 mph'
  });

  // Mock weather alerts for demonstration
  useEffect(() => {
    const mockAlerts = [
      {
        id: 1,
        type: 'Severe Thunderstorm Warning',
        description: 'Strong thunderstorms expected in Nashville area. Potential for heavy rain and strong winds.',
        time: '2:30 PM',
        severity: 'high',
        icon: FaCloudRain
      },
      {
        id: 2,
        type: 'Heat Advisory',
        description: 'High temperatures expected to reach 95°F. Take precautions and stay hydrated.',
        time: '1:45 PM',
        severity: 'medium',
        icon: FaThermometerHalf
      }
    ];
    setWeatherAlerts(mockAlerts);
  }, []);

  const pageStyle = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    color: 'var(--pure-white)'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '30px'
  };

  const currentWeatherStyle = {
    background: 'rgba(26, 27, 37, 0.9)',
    padding: '20px',
    borderRadius: '15px',
    marginBottom: '30px',
    border: '1px solid var(--music-gold)',
    boxShadow: 'var(--neon-glow)'
  };

  const alertCardStyle = {
    background: 'rgba(26, 27, 37, 0.9)',
    padding: '20px',
    borderRadius: '15px',
    marginBottom: '15px',
    border: '1px solid var(--music-gold)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'high':
        return 'var(--guitar-red)';
      case 'medium':
        return 'var(--music-gold)';
      default:
        return 'var(--neon-blue)';
    }
  };

  return (
    <div style={pageStyle}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={headerStyle}>
          <FaExclamationTriangle size={24} color="var(--music-gold)" />
          <h1>Emergency Weather Alerts</h1>
        </div>

        {/* Current Weather Display */}
        <motion.div 
          style={currentWeatherStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 style={{ marginBottom: '20px', color: 'var(--music-gold)' }}>
            Current Weather in Nashville
          </h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <FaSun size={40} style={{ marginBottom: '10px', color: 'var(--music-gold)' }} />
              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>{currentWeather.temperature}</h3>
              <p>{currentWeather.condition}</p>
            </div>
            <div style={{ display: 'flex', gap: '30px' }}>
              <div>
                <p style={{ color: 'var(--music-gold)' }}>Feels Like</p>
                <p>{currentWeather.feelsLike}</p>
              </div>
              <div>
                <p style={{ color: 'var(--music-gold)' }}>Humidity</p>
                <p>{currentWeather.humidity}</p>
              </div>
              <div>
                <p style={{ color: 'var(--music-gold)' }}>Wind Speed</p>
                <p>{currentWeather.windSpeed}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <h2 style={{ marginBottom: '20px' }}>Current Alerts</h2>
        
        {weatherAlerts.length > 0 ? (
          weatherAlerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              style={{
                ...alertCardStyle,
                borderColor: getSeverityColor(alert.severity)
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ transform: 'translateY(-5px)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <alert.icon size={24} color={getSeverityColor(alert.severity)} />
                <div>
                  <h3 style={{ color: getSeverityColor(alert.severity) }}>{alert.type}</h3>
                  <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{alert.description}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--music-gold)', marginTop: '10px' }}>
                    Issued at {alert.time}
                  </p>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            style={{
              ...alertCardStyle,
              textAlign: 'center',
              color: 'var(--neon-blue)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaSun size={32} style={{ marginBottom: '15px' }} />
            <p>No current weather alerts for Nashville area</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Emergency; 