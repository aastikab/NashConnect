import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaComments } from 'react-icons/fa';

function ChatButton() {
  const [isHovered, setIsHovered] = useState(false);

  const chatButtonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: 'var(--gradient-stage)',
    color: 'var(--pure-white)',
    padding: '12px 20px',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.9rem',
    boxShadow: 'var(--gold-glow)',
    zIndex: 1000
  };

  const greetingStyle = {
    position: 'absolute',
    bottom: '100%',
    right: '0',
    background: 'rgba(26, 27, 37, 0.95)',
    padding: '10px 15px',
    borderRadius: '15px',
    marginBottom: '10px',
    color: 'var(--pure-white)',
    whiteSpace: 'nowrap',
    boxShadow: 'var(--neon-glow)',
    border: '1px solid var(--music-gold)'
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={chatButtonStyle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          style={greetingStyle}
        >
          Hi! How can we help you today? 👋
        </motion.div>
      )}
      <FaComments size={20} />
      Chat with us
    </motion.div>
  );
}

export default ChatButton; 