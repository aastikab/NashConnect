import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaUsers, FaArrowRight, FaCheck } from 'react-icons/fa';

function RideRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: '1'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
    setTimeout(() => {
      setSubmitted(false);
      // Reset form or redirect
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const pageStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    color: 'var(--pure-white)',
    background: 'var(--nashville-night)',
    minHeight: '100vh'
  };

  const formStyle = {
    position: 'relative',
    background: 'rgba(26, 27, 37, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '30px',
    borderRadius: '20px',
    border: '2px solid var(--music-gold)',
    boxShadow: 'var(--neon-glow)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const inputGroupStyle = {
    marginBottom: '20px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: 'var(--music-gold)',
    fontSize: '0.9rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid var(--music-gold)',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'var(--pure-white)',
    fontSize: '1rem'
  };

  const submitButtonStyle = {
    position: 'relative',
    background: '#FFB800',
    color: '#000000',
    padding: '15px 30px',
    borderRadius: '25px',
    border: '2px solid #FFB800',
    fontSize: '1.1rem',
    fontWeight: '700',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  return (
    <div style={pageStyle}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%' }}
      >
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          color: 'var(--music-gold)',
          fontSize: '2rem'
        }}>
          Request a Ride
        </h1>

        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>
              <FaMapMarkerAlt /> Pickup Location
            </label>
            <input
              type="text"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter pickup address"
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>
              <FaMapMarkerAlt /> Dropoff Location
            </label>
            <input
              type="text"
              name="dropoff"
              value={formData.dropoff}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter destination address"
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>
              <FaCalendarAlt /> Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>
              <FaClock /> Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>
              <FaUsers /> Number of Passengers
            </label>
            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              style={inputStyle}
              required
            >
              {[1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div style={{ width: '100%', marginTop: '20px' }}>
            <motion.button
              type="submit"
              style={submitButtonStyle}
              whileHover={{ 
                transform: 'translateY(-2px)',
                background: '#000000',
                border: '2px solid #000000'
              }}
              whileTap={{ 
                transform: 'translateY(0)',
                background: '#000000',
                border: '2px solid #000000'
              }}
              disabled={submitted}
            >
              {submitted ? (
                <>
                  <FaCheck size={20} /> 
                  <span>Request Submitted</span>
                </>
              ) : (
                <>
                  <span>Submit Request</span>
                  <FaArrowRight size={20} />
                </>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default RideRequest; 