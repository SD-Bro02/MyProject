import React from 'react';

const AdminProfile = ({ admin, onLogout  }) => {
    return (
        <div style={styles.container}>
            <h2>Admin Profile</h2>
            <p><strong>admin ID:</strong> {admin.adminId}</p>
            <p><strong>Name:</strong> {admin.adminName}</p>
            <p><strong>Email:</strong> {admin.adminEmail}</p>
            <p><strong>Mobile Number:</strong> {admin.adminMobileNumber}</p>
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


export default AdminProfile;
