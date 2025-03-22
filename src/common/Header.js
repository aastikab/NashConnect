import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../assets/Ride2Impact.png";
import * as FaIcons from 'react-icons/fa';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const headerStyle = {
    background: 'var(--nashville-night)',
    padding: '1rem',
    boxShadow: 'var(--neon-glow)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: `2px solid var(--music-gold)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const navContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flex: 1,
    marginLeft: '20px'
  };

  const logoStyle = {
    height: '35px',
    objectFit: 'contain',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    filter: 'drop-shadow(0 0 8px var(--neon-blue))'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    height: '100%'
  };

  const navItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    color: '#FFFFFF',
    textDecoration: 'none',
    background: 'rgba(255, 255, 255, 0.1)'
  };

  const iconStyle = {
    fontSize: '18px'
  };

  const enhancedNavItemStyle = {
    ...navItemStyle,
    background: 'rgba(255, 184, 0, 0.1)',
    backdropFilter: 'blur(8px)',
    transition: 'all 0.3s ease',
    border: `1px solid var(--music-gold)`,
    color: 'var(--music-gold)',
    '&:hover': {
      background: 'rgba(255, 184, 0, 0.2)',
      boxShadow: 'var(--gold-glow)'
    }
  };

  const navItemHoverStyle = {
    background: 'rgba(255, 255, 255, 0.25)',
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-md)',
  };

  return (
    <header style={headerStyle}>
      <nav style={navContainerStyle}>
        <Link to="/" style={logoContainerStyle}>
          <img 
            src={Logo} 
            alt="NashConnect Logo" 
            style={logoStyle}
            className="glow-text"
          />
        </Link>
        
        <ul className="nav-list" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          <li className="nav-item">
            <Link to="/quiz" style={enhancedNavItemStyle}>
              <FaIcons.FaQuestionCircle style={iconStyle} />
              Quizzes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/leaderboard" style={enhancedNavItemStyle}>
              <FaIcons.FaTrophy style={iconStyle} />
              Leaderboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Volunteering" style={enhancedNavItemStyle}>
              <FaIcons.FaCar style={iconStyle} />
              Become a Driver
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ride-request" style={enhancedNavItemStyle}>
              <FaIcons.FaHandsHelping style={iconStyle} />
              Request a Ride
            </Link>
          </li>
        </ul>
      </nav>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }}>
        {isAuthenticated ? (
          <>
            <Link to="/profile" style={enhancedNavItemStyle}>
              <FaIcons.FaUserCircle style={iconStyle} />
              Profile
            </Link>
            <div style={enhancedNavItemStyle}>
              <FaIcons.FaSignInAlt style={iconStyle} />
              <LogoutButton />
            </div>
          </>
        ) : (
          <>
            <Link to="/signup" style={enhancedNavItemStyle}>
              <FaIcons.FaUserPlus style={iconStyle} />
              Sign up
            </Link>
            <Link 
              to="/login" 
              style={enhancedNavItemStyle}
              className="hover-scale"
            >
              <FaIcons.FaSignInAlt style={iconStyle} />
              Login
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
