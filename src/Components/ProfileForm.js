import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { sharedStyles } from "../styles/SharedStyles";
import { FaCar, FaUserFriends } from 'react-icons/fa';

function ProfileForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        agreed: false
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear any error messages when user starts typing
        setErrorMessage("");
    };

    const handleDriverSignup = () => {
        if (!formData.agreed) {
            setErrorMessage("Please agree to the terms before proceeding.");
            return;
        }
        try {
            // Store the form data or process it as needed
            setSuccessMessage("Registration successful! Redirecting to driver profile...");
            setTimeout(() => {
                navigate('/driverprofile');
            }, 2000); // Give user time to see success message
        } catch (error) {
            setErrorMessage("Registration failed. Please try again.");
        }
    };

    const handleRiderSignup = () => {
        if (!formData.agreed) {
            setErrorMessage("Please agree to the terms before proceeding.");
            return;
        }
        try {
            setSuccessMessage("Registration successful! Redirecting to rider profile...");
            setTimeout(() => {
                navigate('/riderprofile');
            }, 2000);
        } catch (error) {
            setErrorMessage("Registration failed. Please try again.");
        }
    };

    const roleCardStyle = {
        ...sharedStyles.card,
        textAlign: 'center',
        padding: '40px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    };

    return (
        <div style={sharedStyles.pageContainer}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={sharedStyles.contentCard}
            >
                <h1 style={sharedStyles.pageTitle}>Join NashConnect</h1>

                <div style={sharedStyles.section}>
                    <h2 style={sharedStyles.sectionTitle}>Personal Information</h2>
                    <div style={sharedStyles.card}>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '8px' }}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    border: '1px solid var(--gray-300)'
                                }}
                                required
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px' }}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    border: '1px solid var(--gray-300)'
                                }}
                                required
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px' }}>
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    border: '1px solid var(--gray-300)'
                                }}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div style={sharedStyles.section}>
                    <h2 style={sharedStyles.sectionTitle}>Disclaimer</h2>
                    <div style={sharedStyles.card}>
                        <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                            By signing up, you acknowledge that this is a volunteer-based service.
                            We do not guarantee rides and are not liable for any incidents that may occur.
                        </p>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <input
                                type="checkbox"
                                name="agreed"
                                checked={formData.agreed}
                                onChange={handleInputChange}
                                style={{ width: '20px', height: '20px' }}
                            />
                            <span>I acknowledge and agree to the disclaimer above</span>
                        </label>
                    </div>
                </div>

                <div style={sharedStyles.section}>
                    <h2 style={sharedStyles.sectionTitle}>Choose Your Role</h2>
                    <div style={sharedStyles.grid}>
                        <motion.div
                            whileHover={{ transform: 'translateY(-8px)' }}
                            style={roleCardStyle}
                            onClick={handleDriverSignup}
                        >
                            <FaCar size={48} color="var(--primary-blue)" style={{ marginBottom: '20px' }} />
                            <h3 style={{ marginBottom: '16px', color: 'var(--primary-blue)' }}>Driver</h3>
                            <p>Help others exercise their right to Impact by providing transportation</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ transform: 'translateY(-8px)' }}
                            style={roleCardStyle}
                            onClick={handleRiderSignup}
                        >
                            <FaUserFriends size={48} color="var(--primary-blue)" style={{ marginBottom: '20px' }} />
                            <h3 style={{ marginBottom: '16px', color: 'var(--primary-blue)' }}>Rider</h3>
                            <p>Get connected with volunteer drivers to reach your polling location</p>
                        </motion.div>
                    </div>
                </div>

                {/* Add success message display */}
                {successMessage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                            padding: '15px',
                            background: 'var(--success-green)',
                            color: 'white',
                            borderRadius: '8px',
                            marginBottom: '20px',
                            textAlign: 'center'
                        }}
                    >
                        {successMessage}
                    </motion.div>
                )}

                {/* Add error message display */}
                {errorMessage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                            padding: '15px',
                            background: 'var(--accent-red)',
                            color: 'white',
                            borderRadius: '8px',
                            marginBottom: '20px',
                            textAlign: 'center'
                        }}
                    >
                        {errorMessage}
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}

export default ProfileForm;
