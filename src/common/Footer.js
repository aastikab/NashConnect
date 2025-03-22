import React, { useState } from "react";
import Chatbox from "../Components/Chatbox";
import { FaComments } from 'react-icons/fa';

function Footer() {
  const [isChatboxVisible, setChatboxVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const footerStyle = {
    backgroundColor: 'var(--primary-blue)',
    color: 'var(--pure-white)',
    padding: '1rem',
    position: 'fixed',
    bottom: 0,
    right: 0,
    zIndex: 999
  };

  const chatButtonStyle = {
    background: 'var(--gradient-stage)',
    border: 'none',
    color: 'var(--pure-white)',
    fontSize: '0.9rem',
    cursor: 'pointer',
    padding: '12px 20px',
    borderRadius: '25px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: 'var(--gold-glow)',
    margin: '20px'
  };

  const greetingStyle = {
    position: 'absolute',
    bottom: '100%',
    right: '20px',
    background: 'rgba(26, 27, 37, 0.95)',
    padding: '10px 15px',
    borderRadius: '15px',
    marginBottom: '10px',
    color: 'var(--pure-white)',
    whiteSpace: 'nowrap',
    boxShadow: 'var(--neon-glow)',
    border: '1px solid var(--music-gold)'
  };

  const toggleChatbox = () => {
    setChatboxVisible(!isChatboxVisible);
  };

  return (
    <footer style={footerStyle}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'relative' }}
      >
        {isHovered && (
          <div style={greetingStyle}>
            Hi! How can we help you today? 👋
          </div>
        )}
        <button 
          onClick={toggleChatbox}
          style={chatButtonStyle}
          className="modern-button"
        >
          <FaComments size={20} />
          Chat with us
        </button>
      </div>
      {isChatboxVisible && <Chatbox onClose={() => setChatboxVisible(false)} />}
    </footer>
  );
}

export default Footer;
