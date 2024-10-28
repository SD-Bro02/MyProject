import React from 'react';

const DoctorProfile = ({ doctor, onLogout }) => {
    if (!doctor) {
        return <p>Loading...</p>;
    }

    return (
        <div style={styles.container}>
            <h2>Doctor Profile</h2>
            <p><strong>Doctor ID:</strong> {doctor.doctorId}</p>
            <p><strong>Name:</strong> {doctor.doctorName}</p>
            <p><strong>Email:</strong> {doctor.doctorEmail}</p>
            <p><strong>Mobile Number:</strong> {doctor.doctorMobileNumber}</p>
            <button onClick={onLogout} style={styles.button}>Logout</button>
        </div>
    );
};

// Basic inline styles
const styles = {
    container: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        textAlign: 'left',
    },
    button: {
        padding: '10px',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '20px',
    },
};

export default DoctorProfile;
