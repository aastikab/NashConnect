import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  const layoutStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--primary-blue)',
    position: 'relative',
    overflow: 'hidden'
  };

  const backgroundAnimationStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: '400% 400%',
    backgroundImage: `
      linear-gradient(
        45deg,
        var(--dark-navy) 0%,
        var(--primary-blue) 25%,
        var(--secondary-blue) 50%,
        var(--primary-blue) 75%,
        var(--dark-navy) 100%
      )
    `,
    animation: 'gradient 15s ease infinite',
    opacity: 0.9,
    zIndex: 0
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
    zIndex: 0
  };

  const mainStyle = {
    flex: 1,
    padding: '20px',
    position: 'relative',
    zIndex: 1
  };

  return (
    <div style={layoutStyle}>
      <div style={backgroundAnimationStyle} />
      <div style={overlayStyle} />
      <nav>
        <Header />
      </nav>
      <main style={mainStyle}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
