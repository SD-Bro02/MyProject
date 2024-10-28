import React from 'react';

const SuperadminProfile = ({ superadmin, onLogout  }) => {
    return (
        <div style={styles.container}>
            <h2>Superadmin Profile</h2>
            <p><strong>superadmin ID:</strong> {superadmin.superadminId}</p>
            <p><strong>Name:</strong> {superadmin.superadminName}</p>
            <p><strong>Email:</strong> {superadmin.superadminEmail}</p>
            <p><strong>Mobile Number:</strong> {superadmin.superadminMobileNumber}</p>
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


export default SuperadminProfile;
