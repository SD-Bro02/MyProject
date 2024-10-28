import React from 'react';

const UserProfile = ({ user, onLogout  }) => {
    return (
        <div style={styles.container}>
            <h2>User Profile</h2>
            <p><strong>user ID:</strong> {user.userId}</p>
            <p><strong>Name:</strong> {user.userName}</p>
            <p><strong>Email:</strong> {user.userEmail}</p>
            <p><strong>Mobile Number:</strong> {user.userMobileNumber}</p>
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


export default UserProfile;
