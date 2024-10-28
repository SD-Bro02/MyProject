import React from 'react';

const NurseProfile = ({ nurse, onLogout  }) => {
    return (
        <div style={styles.container}>
            <h2>Nurse Profile</h2>
            <p><strong>nurse ID:</strong> {nurse.nurseId}</p>
            <p><strong>Name:</strong> {nurse.nurseName}</p>
            <p><strong>Email:</strong> {nurse.nurseEmail}</p>
            <p><strong>Mobile Number:</strong> {nurse.nurseMobileNumber}</p>
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


export default NurseProfile;
